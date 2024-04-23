import React, { useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { FileUpload, FileUploadHeaderTemplateOptions, FileUploadSelectEvent, FileUploadUploadEvent, ItemTemplateOptions } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import axios from 'axios';
import { InputNumber } from 'primereact/inputnumber';
import './styles.css';

interface Currency{
    label:string
    value:string
}

interface Article{
    title? : string;
    description? : string;
    currency? : string;
    price? : number | null;
    year? : number | null;
    brand? : string;
    model? : string;
    location? : string;
    category? : number;
}

type Severity = 'success' | 'info' | 'warn' | 'error';

const PostArticle= () => {
    const navigate = useNavigate();
    const toast = useRef<Toast>(null);
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef<FileUpload>(null);
    const [article, setArticle] = useState<Article>({});
    const [currencyOptions] = useState([
        { label: 'U$D', value: 'USD' },
        { label: 'ARG', value: 'ARG' },
        { label: 'EUR', value: 'EUR' }
    ]);
    const [categoriesOptions] = useState([
        { label: 'Autos Clasicos', value: '1' },
        { label: 'Antiguedades', value: '2' }
    ]);

    const navigateRoute = (route: string) => {
        navigate(route)
    }

    const showToast = (severity: Severity, summary: string, detail: string) => {
        toast.current?.show({ severity: severity, summary: summary, detail: detail });
    }

    const handlePostArticle = () => {
        let form = new FormData();
        form.append('title', article.title || '');
        form.append('description', article.description || '');
        form.append('currency', 'usd');
        form.append('price', article.price?.toString() || '');
        form.append('year', article.year?.toString() || '');
        form.append('brand', article.brand || '');
        form.append('model', article.model || '');
        form.append('location', article.location || '');
        form.append('category_id', article.category?.toString() || '');
        fileUploadRef.current?.getFiles().forEach((file) => {
            form.append('files', file);
        });

        axios.post('http://localhost:3000/articles',
            form,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }
        ).then((response) => {
            showToast('success', 'Publicado', 'El articulo se publico correctamente');
        })
        .catch((error) => {
            console.log(error);
            showToast('error', 'No se pudo publicar', 'Verifique los mensajes en la pantalla');
        });
    }

    const footer = (
        <div className="flex justify-content-end gap-3">
            <Button label="Cancelar" severity="danger" onClick={() => navigateRoute('/')} className='border-round-xl mt-3'/>
            <Button label="Publicar" onClick={handlePostArticle} className='border-round-xl mt-3'style={{ backgroundColor:'#176B87'}}/>
        </div>
    );

    // FILE
    const onTemplateSelect = (e: FileUploadSelectEvent) => {
        let _totalSize = totalSize;
        let files = e.files;

        for (let i = 0; i < files.length; i++) {
            _totalSize += files[i].size || 0;
        }

        setTotalSize(_totalSize);
    };

    const onTemplateUpload = (e: FileUploadUploadEvent) => {
        let _totalSize = 0;

        e.files.forEach((file) => {
            _totalSize += file.size || 0;
        });

        setTotalSize(_totalSize);
        toast.current?.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const onTemplateRemove = (file: File, callback: Function) => {
        setTotalSize(totalSize - file.size);
        callback();
    };

    const onTemplateClear = () => {
        setTotalSize(0);
    };

    const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
        const { className, chooseButton, cancelButton } = options;
        const value = totalSize / 10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div
                className={className + ' border-round-top-xl'}
                style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}
            >
                {chooseButton}
                {cancelButton}
                <div className="flex align-items-center gap-3 ml-auto">
                    <span>{formatedValue} / 1 MB</span>
                    <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
                </div>
            </div>
        );
    };

    const itemTemplate = (file: any, props: ItemTemplateOptions) => {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        );
    };

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
                    Arrastra y suelta la imagen aquí
                </span>
            </div>
        );
    };

    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };

        return (
            <div className='py-4 grid m-0'>
                <div className='col-4'>
                    <Card className="border-round-xl" title="Producto">
                        <div className='flex flex-column gap-4'>
                            <span className="p-float-label">
                                <InputText
                                    className='border-round-xl w-full'
                                    placeholder='Titulo'
                                    id="title"
                                    value={article.title}
                                    onChange={(e) => setArticle({...article, title: e.target.value})}
                                />
                                <label htmlFor="title">Titulo</label>
                            </span>

                            <span className="p-float-label">
                                <InputTextarea
                                    className='border-round-xl w-full'
                                    placeholder='Descripcion'
                                    id="description"
                                    rows={5}
                                    autoResize={false}
                                    value={article.description}
                                    onChange={(e) => setArticle({...article, description: e.target.value})}
                                />
                                <label htmlFor="description">Descipcion</label>
                            </span>

                            <div className="formgrid grid">
                                <div className="field m-0 col-12 md:col-4">
                                    <span className="p-float-label">
                                        <Dropdown
                                            placeholder='Categoria'
                                            id="currency"
                                            inputId="dd-city"
                                            options={categoriesOptions}
                                            optionLabel="label"
                                            className="border-round-xl w-full"
                                            value={article.category}
                                            onChange={(e: DropdownChangeEvent) => setArticle({...article, category: e.value})}
                                        />
                                        <label htmlFor="currency">Categoria</label>
                                    </span>
                                </div>

                                <div className="field m-0 col-12 md:col-4">
                                    <span className="p-float-label">
                                        <Dropdown
                                            placeholder='Moneda'
                                            id="currency"
                                            inputId="dd-city"
                                            options={currencyOptions}
                                            optionLabel="label"
                                            className="border-round-xl w-full"
                                            value={article.currency}
                                            onChange={(e: DropdownChangeEvent) => setArticle({...article, currency: e.value})}
                                        />
                                        <label htmlFor="currency">Moneda</label>
                                    </span>
                                </div>

                                <div className="field m-0 col-12 md:col-4">
                                    <span className="p-float-label">
                                        <InputNumber
                                            placeholder='Precio'
                                            id="price"
                                            inputClassName='border-round-xl w-full'
                                            // min={1800}
                                            value={article.price}
                                            onValueChange={(e) => setArticle({...article, price: e.value})}
                                        />
                                        <label htmlFor="price">Precio</label>
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span className="p-float-label">
                                    <InputText
                                        className='border-round-xl w-full'
                                        placeholder='Marca'
                                        id="brand"
                                        value={article.brand}
                                        onChange={(e) => setArticle({...article, brand: e.target.value})}
                                        />
                                    <label htmlFor="brand">Marca</label>
                                </span>

                                <span className="p-float-label">
                                    <InputText
                                        className='border-round-xl w-full'
                                        placeholder='Modelo'
                                        id="model"
                                        value={article.model}
                                        onChange={(e) => setArticle({...article, model: e.target.value})}
                                        />
                                    <label htmlFor="model">Modelo</label>
                                </span>

                                <span className="p-float-label">
                                    <InputNumber
                                        useGrouping={false}
                                        placeholder='Año'
                                        id="year"
                                        inputClassName='w-full border-round-xl'
                                        min={1800}
                                        max={3000}
                                        value={article.year}
                                        onValueChange={(e) => setArticle({...article, year: e.value})}
                                    />
                                    <label htmlFor="year">Año</label>
                                </span>
                            </div>

                            <span className="p-float-label">
                                <InputText
                                    className='border-round-xl w-full'
                                    placeholder='Ubicacion'
                                    id="location"
                                    value={article.location}
                                    onChange={(e) => setArticle({...article, location: e.target.value})}
                                />
                                <label htmlFor="location">Ubicacion</label>
                            </span>
                        </div>
                    </Card>
                </div>

                <div className='col-8'>
                    <Card className="border-round-xl" title="Imagenes" footer={footer}>
                        <Toast ref={toast}></Toast>

                        <Tooltip target=".custom-choose-btn" content="Elegir imagen" position="bottom" />
                        <Tooltip target=".custom-cancel-btn" content="Eliminar las imagenes" position="bottom" />

                        <FileUpload
                            ref={fileUploadRef}
                            name="demo[]"
                            multiple
                            accept="image/*"
                            maxFileSize={1000000}
                            onUpload={onTemplateUpload}
                            onSelect={onTemplateSelect}
                            onError={onTemplateClear}
                            onClear={onTemplateClear}
                            headerTemplate={headerTemplate}
                            itemTemplate={itemTemplate}
                            emptyTemplate={emptyTemplate}
                            chooseOptions={chooseOptions}
                            cancelOptions={cancelOptions}
                        />
                    </Card>
                </div>
            </div>
        )
}
export default PostArticle;