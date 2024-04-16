import React, { useState, useEffect } from 'react';
import { DataView } from 'primereact/dataview';
import axios from 'axios';
import { Card } from 'primereact/card';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { Slider, SliderChangeEvent } from "primereact/slider";
import { Divider } from 'primereact/divider';

interface Article {
    id: number;
    title: string;
    price: number;
    image: string;
    currency: string;
    category: string;
    location: string;
}

interface SortOption {
    label: string;
    value: string;
}

const Search = () => {

    const [articles, setArticles] = useState<Article[]>([]);
    const [sortKey, setSortKey] = useState<string>('');
    const [sortOrder, setSortOrder] = useState< 0 | 1 | -1 | null | undefined >(0);
    const [sortField, setSortField] = useState<string>('');
    const sortOptions: SortOption[] = [
        { label: 'Precio mayor a menor', value: '!price' },
        { label: 'Precio menor a mayor', value: 'price' }
    ];
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [antiques, setAntiques] = useState<boolean>(false);
    const [classics, setClassics] = useState<boolean>(false);
    const [price, setPrice] = useState<number | [number, number] | undefined>([20,80]);

    const getArticles = async () => {
        await axios.get('http://localhost:3000/articles')
            .then((response) => {
                setArticles(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getArticles();
    }, []);

    const onSortChange = (event: DropdownChangeEvent) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        } else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    };

    const itemTemplate = (product: Article) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`http://localhost:3000/articles/file`} alt={product.title} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.title}</div>
                            {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-map-marker"></i>
                                    <span className="font-semibold">{product.location}</span>
                                </span>
                            </div>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{product.category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">{product.currency} {product.price}</span>
                        </div>
                    </div>
                </div>
            <Divider />
            </div>
        );
    };

    return (
        <div className='py-4 grid m-0'>
            <div className='col-3'>
                <Card className="border-round-xl">
                    <div className='grid row-gap-3'>
                        <div className='col-12'>
                            <div className='text-2xl font-bold pb-4'>Ordenar</div>
                            <div className='col-12'>
                                <Dropdown
                                    options={sortOptions}
                                    value={sortKey}
                                    optionLabel="label"
                                    onChange={onSortChange}
                                    className="w-full"
                                    placeholder="Ordenar por"
                                />
                            </div>
                        </div>

                        <div className='col-12'>
                            <div className='text-2xl font-bold'>Categorias</div>
                            <div className='col-12'>
                                <div className="flex align-items-center">
                                    <Checkbox inputId="classics" name="categories" value="classics" onChange={() => setClassics(!classics)} checked={categories.includes('Mushroom')} />
                                    <label htmlFor="classics" className="ml-2">Autos clasicos</label>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="flex align-items-center">
                                    <Checkbox inputId="antiques" name="categories" value="antiques" onChange={() => setAntiques(!antiques) } checked={categories.includes('Mushroom')} />
                                    <label htmlFor="antiques" className="ml-2">Antiguedades</label>
                                </div>
                            </div>
                        </div>

                        <div className='col-12'>
                            <div className='text-2xl font-bold'>Ubicacion</div>
                            <div className='col-12'>
                                <div className="flex align-items-center">
                                    <Checkbox inputId="classics" name="categories" value="classics" onChange={() => setClassics(!classics)} checked={categories.includes('Mushroom')} />
                                    <label htmlFor="classics" className="ml-2">Autos clasicos</label>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="flex align-items-center">
                                    <Checkbox inputId="antiques" name="categories" value="antiques" onChange={() => setAntiques(!antiques) } checked={categories.includes('Mushroom')} />
                                    <label htmlFor="antiques" className="ml-2">Antiguedades</label>
                                </div>
                            </div>
                        </div>

                        <div className='col-12'>
                            <div className='text-2xl font-bold'>Precio</div>
                            <div className='col-12'>
                                <Slider value={price} onChange={(e: SliderChangeEvent) => setPrice(e.value)} className="w-14rem" range/>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className='col-9'>
                <Card className="border-round-xl">
                    <DataView value={articles} itemTemplate={itemTemplate} sortField={sortField} sortOrder={sortOrder} />
                </Card>
            </div>
        </div>
    )
}
export default Search;