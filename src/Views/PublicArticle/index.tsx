import React, { useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { FileUpload, FileUploadHeaderTemplateOptions, FileUploadUploadEvent, ItemTemplateOptions } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';


interface DatosVendedor {
    nombre: string;
    telefono: string;
    email: string;
}
interface Currency{
    label:string
    value:string
}

const PublicArticle= () => {
    const [selectedMoney, setSelectedMoney] = useState<Currency | null>(null);
    const [vendedor, setVendedor] = useState<DatosVendedor>({
        nombre: '',
        telefono: '',
        email: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setVendedor({
            ...vendedor,
            [name]: value
        });
    };
    const [money] = useState([
        { label: 'USD', value: 'USD' },
        { label: 'EUR', value: 'EUR' },
        { label: 'ARG', value: 'ARG' },
        // Agrega más opciones de moneda según sea necesario
        ]);

        const [totalSize, setTotalSize] = useState(0);
        const fileUploadRef = useRef<FileUpload>(null)

        
        const onTemplateSelect = (e: FileUploadUploadEvent) => {
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
            //toast.current?.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
        };
    
        const onTemplateRemove = (file: File, callback: Function) => {
            setTotalSize(totalSize - file.size);
            callback();
        };
    
        const onTemplateClear = () => {
            setTotalSize(0);
        };
        
        const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
            const { className, chooseButton, uploadButton, cancelButton } = options;
            const value = totalSize / 10000;
            const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';
    
            return (
                <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                    {chooseButton}
                    {uploadButton}
                    {cancelButton}
                    <div className="flex align-items-center gap-3 ml-auto">
                        <span>{formatedValue} / 1 MB</span>
                        <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
                    </div>
                </div>
            );
        };
        const itemTemplate = (file: any, props: ItemTemplateOptions) => {
            //const file = inFile as File;
            return (
                <div className="flex align-items-center flex-wrap">
                    <div className="flex align-items-center" style={{ width: '40%' }}>
                        // @ts-ignore
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
                        Drag and Drop Image Here
                    </span>
                </div>
            );
        };
    
        const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
        const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined' };
        const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };
    
        return (
            <div className='py-4 grid m-0'>
            <div className='col-4'>
                <Card className="border-round-xl" title="Descripcion del producto" >
                <div className="card flex justify-content-center">
                    <InputTextarea placeholder='Descripcion'
                    id="descripcion"
                            rows={4}
                            cols={80} 
                            autoResize />
                </div>
            <div className="p-fluid mt-1">
            <div>
            <Dropdown placeholder='Selecciona la moneda'
                id="moneda" 
                inputId="dd-city" value={selectedMoney} onChange={(e: DropdownChangeEvent) => setSelectedMoney(e.value)} options={money} optionLabel="label" className="w-full" />
            </div>
            </div>
            <div className="p-fluid">
                <div className="p-field w-8 mt-2">
                    <span className="p-float-label">
                    <label htmlFor="precio">Precio</label>
                    <InputText
                        id="precio"
                        name="precio"
                    />
                    </span>
                </div>
                </div>
                <h2>Datos del Vendedor</h2>
            <div className="p-fluid">
                <div className="p-field w-8 ">
                    <span className="p-float-label">
                    <label htmlFor="nombre">Nombre</label>
                    <InputText
                        id="nombre"
                        name="nombre"
                        value={vendedor.nombre}
                        onChange={handleChange}
                    />
                    </span>
                </div>
                </div>
                <div className="p-fluid">
                <div className="p-field w-8 mt-2">
                <span className="p-float-label">
                    <label htmlFor="telefono">Teléfono</label>
                    <InputText
                        id="telefono"
                        name="telefono"
                        value={vendedor.telefono}
                    />
                    </span>
                </div>
                </div>
                <div className="p-fluid">
                <div className="p-field w-8 mt-2">
                <span className="p-float-label">
                    <label htmlFor="email">Email</label>
                    <InputText
                        id="email"
                        name="email"
                        type="email"
                        value={vendedor.email}
                    />
                    </span>
                </div>
                </div>
                <div className="p-fluid">
                <div className="p-field w-8 mt-2">
                <span className="p-float-label">
                    <label htmlFor="pais">Pais</label>
                    <InputText
                        id="pais"
                        name="pais"
                        type="pais"
                    />
                    </span>
                </div>
                </div>
                </Card>
            </div>

            <div className='col-8'>
                <Card className="border-round-xl">
                <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
                    <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
                    <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

                    <FileUpload ref={fileUploadRef} name="demo[]" url="/api/upload" multiple accept="image/*" maxFileSize={1000000}
                    onUpload={onTemplateUpload} onError={onTemplateClear} onClear={onTemplateClear}
                    headerTemplate={headerTemplate} emptyTemplate={emptyTemplate}
                    chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />
                </Card>
            </div>
        </div>
    )
}
export default PublicArticle;