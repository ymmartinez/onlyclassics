import React, { useState, useEffect } from 'react';
import { DataView } from 'primereact/dataview';
import axios from 'axios';
import { Card } from 'primereact/card';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { Slider, SliderChangeEvent } from "primereact/slider";
import { Divider } from 'primereact/divider';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { Nullable } from 'primereact/ts-helpers';
import { useParams } from 'react-router-dom';

interface Article {
    id: number;
    title: string;
    price: number;
    image: string;
    currency: string;
    category: number;
    location: string;
}

interface SortOption {
    label: string;
    value: string;
}

const Search = () => {
    const { search } = useParams();
    const { category } = useParams();
    const [articles, setArticles] = useState<Article[]>([]);
    const [articlesFiltered, setArticlesFiltered] = useState<Article[]>([]);
    const [sortKey, setSortKey] = useState<string>('');
    const [sortOrder, setSortOrder] = useState< 0 | 1 | -1 | null | undefined >(0);
    const [sortField, setSortField] = useState<string>('');
    const sortOptions: SortOption[] = [
        { label: 'Precio mayor a menor', value: '!price' },
        { label: 'Precio menor a mayor', value: 'price' }
    ];
    const [antiques, setAntiques] = useState<boolean>(category === '2');
    const [classics, setClassics] = useState<boolean>(category === '1');
    const [maxPrice, setMaxPrice] = useState<number>(0);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [prices, setPrices] = useState<number | [number, number] | undefined>([minPrice, maxPrice]);
    const [minPriceFilter, setMinPriceFilter] = useState<number>(0);
    const [maxPriceFilter, setMaxPriceFilter] = useState<number>(0);

    useEffect(() => {
        getArticles();
    }, [search]);

    const getArticles = async () => {
        let url = `http://localhost:3000/articles`;

        if (search && search !== '-') {
            url += `?search=${search}`;
        }

        if (!(antiques == classics)) {
            url += `?category=${antiques ? 2 : 1}`;
        }

        await axios.get(url)
            .then((response) => {
                setArticles(response.data);
                setArticlesFiltered(response.data);
                const maxPrice = Math.max(...response.data.map((article: Article) => article.price));
                const minPrice = Math.min(...response.data.map((article: Article) => article.price));
                setMaxPrice(maxPrice);
                setMinPrice(minPrice);
                setMinPriceFilter(minPrice);
                setMaxPriceFilter(maxPrice);
                setPrices([minPrice, maxPrice]);
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

    const setPricesFilter = (value: number | [number, number]) => {
        if (value instanceof Array) {
            if (value[0] > value[1]) return;
            setPrices(value);
            setMinPriceFilterCustom(value[0]);
            setMaxPriceFilterCustom(value[1]);
            setArticlesFiltered(articles.filter((article: Article) => article.price >= value[0] && article.price <= value[1]));
        }
    }

    const setMaxPriceFilterCustom = (value: Nullable<number | null>) => {
        if (!value || value < minPriceFilter) return;
        setMaxPriceFilter(value);
        setArticlesFiltered(articles.filter((article: Article) => article.price >= minPriceFilter && article.price <= value));
        setPrices([minPriceFilter, value]);
    }

    const setMinPriceFilterCustom = (value: Nullable<number | null>) => {
        if (!value || value > maxPriceFilter) return;
        setMinPriceFilter(value);
        setArticlesFiltered(articles.filter((article: Article) => article.price >= value && article.price <= maxPriceFilter));
        setPrices([value, maxPriceFilter]);
    }

    const setAntiquesFiler = (value: boolean) => {
        setAntiques(value);
        if (value && classics) {
            setArticlesFiltered(articles);return;
        }

        if (value) {
            setArticlesFiltered(articles.filter((article: Article) => article.category === 2));
        } else {
            setArticlesFiltered(articles.filter((article: Article) => article.category === 1));
        }
    }

    const setClassicsFileter = async (value: boolean) => {
        setClassics(value);
        if (value && antiques) {
            setArticlesFiltered(articles);return;
        }

        if (value) {
            setArticlesFiltered(articles.filter((article: Article) => article.category === 1));
        } else {
            setArticlesFiltered(articles.filter((article: Article) => article.category === 2));
        }
    }

    const itemTemplate = (article: Article) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`http://localhost:3000/articles/file`} alt={article.title} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{article.title}</div>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-map-marker"></i>
                                    <span className="font-semibold">{article.location}</span>
                                </span>
                            </div>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{article.category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">{article.currency} {article.price}</span>
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
                                    placeholder="Ordenar por"
                                />
                            </div>
                        </div>

                        <div className='col-12'>
                            <div className='text-2xl font-bold'>Categorias</div>
                            <div className='col-12'>
                                <div className="flex align-items-center">
                                    <InputSwitch checked={classics} onChange={(e: InputSwitchChangeEvent) => setClassicsFileter(e.value)} inputId='classics' />
                                    <label htmlFor="classics" className="ml-2">Autos clasicos</label>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="flex align-items-center">
                                    <InputSwitch checked={antiques} onChange={(e: InputSwitchChangeEvent) => setAntiquesFiler(e.value)} inputId='antiques' />
                                    <label htmlFor="antiques" className="ml-2">Antiguedades</label>
                                </div>
                            </div>
                        </div>

                        {/* <div className='col-12'>
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
                        </div> */}

                        <div className='col-12'>
                            <div className='text-2xl font-bold'>Precio</div>
                            <div className='grid'>
                                <div className='col-5'>
                                    <InputNumber value={minPriceFilter} inputClassName='w-8rem'
                                        onValueChange={(e : InputNumberValueChangeEvent) => setMinPriceFilterCustom(e.value)}
                                    />
                                </div>
                                <div className='col-2 text-center flex align-items-center justify-content-center'>
                                    <span> - </span>
                                </div>
                                <div className='col-5'>
                                    <InputNumber value={maxPriceFilter} inputClassName='w-8rem'
                                        onValueChange={(e : InputNumberValueChangeEvent) => setMaxPriceFilterCustom(e.value)}/>
                                </div>
                            </div>
                            <div className='col-12'>
                                <Slider value={prices} onChange={(e: SliderChangeEvent) => setPricesFilter(e.value)} range max={maxPrice} min={minPrice}></Slider>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            <div className='col-9'>
                <Card className="border-round-xl">
                    <DataView
                    value={articlesFiltered}
                    itemTemplate={itemTemplate}
                    sortField={sortField}
                    sortOrder={sortOrder}
                    emptyMessage="No se encontraron articulos"
                />
                </Card>
            </div>
        </div>
    )
}
export default Search;