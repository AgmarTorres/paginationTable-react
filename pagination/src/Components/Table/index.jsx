import React, { useState, useEffect, useCallback } from "react";
import api from "../../services/api";
import {
  Container,
  PTable,
  Pagination,
  PaginationItem,
  PaginationButton,
} from "./styles";

function Table() {
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(
        `/products?page=${currentPage}&limit=${limit}`
      );
      const totalresponse = await api.get("/allproducts");
      setTotal(totalresponse.data);

      const TotalPages = Math.ceil(total / limit);
      const arrayPages = [];
      for (let i = 1; i <= TotalPages; i++) {
        arrayPages.push(i);
      }

      setProducts(response.data);
      setPages(arrayPages);
      //console.log(response.data.length);
    }
    loadProducts();
  }, [currentPage, limit, total]);

  const limits = useCallback((e) => {
    setLimit(e.target.value);
    setCurrentPage(1);
  }, []);

  return (
    <Container>
      <h3>Produtos</h3>
      <select onChange={limits}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="100">100</option>
      </select>
      <PTable>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>Description</th>
            <th>price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={`${index + product.id}`}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.image}</td>
            </tr>
          ))}
        </tbody>
      </PTable>
      <Pagination>
        <div>Qtd {total}</div>
        <PaginationButton>
          {currentPage > 1 && (
            <PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </PaginationItem>
          )}
          {pages.map((page) => (
            <PaginationItem
              isSelect={page === currentPage}
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </PaginationItem>
          ))}
          {currentPage < pages.length && (
            <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </PaginationItem>
          )}
        </PaginationButton>
      </Pagination>
    </Container>
  );
}

export default Table;
