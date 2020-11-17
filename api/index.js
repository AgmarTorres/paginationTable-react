const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/products", (req, res) => {
  console.log(req.query);
  const products = [
    {
      id: 1,
      title: "bola1",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola2",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola3",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola4",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola5",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola6",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola7",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola8",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
  ];
  const currentProducts = [];
  const total = req.query.limit;
  for (let i = 0; i <= req.query.limit - 1; i++) {
    console.log((req.query.page - 1) * req.query.limit + i);
    currentProducts.push(products[(req.query.page - 1) * req.query.limit + i]);
  }
  // console.log(currentProducts);
  res.json(currentProducts);
});

app.get("/allproducts", (req, res) => {
  console.log(req.query);
  const products = [
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
    {
      id: 1,
      title: "bola",
      description:
        "Instruções de cuidados: Lavagem à máquina Marca Aramis Fabricado com materiais de alta qualidade esign exclusivo",
      price: 12.8,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F315040936438780369%2F&psig=AOvVaw3lNyBVPgJ_198SR1-9ub-3&ust=1605707755958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiLiNTdie0CFQAAAAAdAAAAABAD",
    },
  ];
  res.json(products.length);
});


app.listen(9999, () => {
  console.log("Server running on port 9999");
});

const axios = require("axios");
