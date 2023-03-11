import { Card, Checkbox, Form } from 'antd';
import { useState } from 'react';
import { Input } from 'antd';
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red',fontWeight:'light' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th style={{width:100}}>Name</th>
          <th style={{width:100}}>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <Form 
    labelCol={{
      span: 8,
}}
wrapperCol={{
      span: 16,
}}
style={{
      maxWidth: 600,
}}
initialValues={{
      remember: true,
}}
>
      <Form.Item
      label="Search"
      type="text"
      value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)}
        >
            <Input />
            </Form.Item>
            <Form.Item
            checked={inStockOnly} 
            onChange={(e) => onInStockOnlyChange(e.target.checked)} 
            >
            <Checkbox>Only in stock</Checkbox>
            </Form.Item>
      </Form>
  );
}

const PRODUCTS = [
  {category: "Smartphone", price: "$1000", stocked: true, name: "Iphone"},
  {category: "tablet", price: "$799", stocked: true, name: "Samsung"},
  {category: "featuredphone", price: "$10", stocked: false, name: "Nokia"},
  {category: "laptops", price: "$658", stocked: true, name: "Dell"},
  {category: "ipad", price: "$799", stocked: false, name: "Apple Inc"},
  {category: "imac", price: "$1501", stocked: true, name: "IMac Desktop"}
];

export default function ProductStock() {
  return <Card><FilterableProductTable products={PRODUCTS} /></Card>;
}
