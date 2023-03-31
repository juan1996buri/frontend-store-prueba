import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { getAllProduct, postProduct } from "../../services/ProductoService";
import { getAllCategory } from "../../services/CategoryService";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function ProductForm() {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [rows, setRow] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });

  const handleImageSelect = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };

  const ChangeProduct = (e) => {
    const { id, value } = e.target;
    setProduct({ ...product, [id]: value });
  };
  useEffect(() => {
    getAllProduct().then((state) => {
      if (state.statusCode === 200) {
        setRow(state?.data.items);
      }
    });
    getAllCategory().then((state) => {
      if (state.statusCode === 200) {
        setCategories(state.data);
      }
    });
  }, []);
  const handleSave = (e) => {
    e.preventDefault();

    if (
      product.name.trim() &&
      product.price.trim() &&
      category.trim() &&
      product.stock
    ) {
      product.category = { id: Number(category) };

      product.stock = Number(product.stock);

      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("price", product.price);
      formData.append("description", product.description);
      formData.append("stock", product.stock);
      formData.append("image", selectedImage);
      formData.append("category", JSON.stringify(product.category));
      console.log(JSON.stringify(product.category));
      console.log(product.name);

      console.log(selectedImage);

      postProduct(formData).then((state) => console.log(state));
    }
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div>
      <div>
        <div className="py-10">
          <Button variant="contained" color="success" onClick={handleOpen}>
            Nuevo producto
          </Button>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="max-w-md mx-auto mt-4 p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Agregar Producto</h2>
              <form onSubmit={handleSave}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Nombre
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    value={product.name}
                    onChange={(e) => ChangeProduct(e)}
                    type="text"
                    placeholder="Ingrese el nombre del producto"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="price"
                  >
                    Precio
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="price"
                    value={product.price}
                    onChange={(e) => ChangeProduct(e)}
                    type="text"
                    placeholder="Ingrese el precio del producto"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="stock"
                  >
                    Stock
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="stock"
                    value={product.stock}
                    onChange={(e) => ChangeProduct(e)}
                    type="text"
                    placeholder="Ingrese el precio del producto"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="category"
                  >
                    Categoría
                  </label>
                  <select
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="category"
                    value={category}
                    onChange={(e) => handleCategory(e)}
                  >
                    <option>Seleccione una categoría</option>
                    {categories?.map((category) => (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="image"
                  >
                    Imagen
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </Box>
        </Modal>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="right">Precio</StyledTableCell>
              <StyledTableCell align="right">Stock</StyledTableCell>
              <StyledTableCell align="right">Categoria</StyledTableCell>
              <StyledTableCell align="right">Opciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <img src={row.image} className="rounded-full h-20 w-20" />
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">{row.stock}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.category.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="contained" color="success">
                    Editar
                  </Button>
                  <Button variant="outlined" color="error">
                    Eliminar
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
