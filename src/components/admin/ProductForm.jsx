import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import {
  getAllProduct,
  postProduct,
  updateProduct,
} from "../../services/ProductoService";
import { getAllCategory } from "../../services/CategoryService";
import ActionAlerts from "../ActionAlerts/ActionAlerts";

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

export default function ProductForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [rows, setRow] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [editProduct, setEditProduct] = useState(false);
  const [alert, setAlert] = useState({
    message: "",
    severity: "",
  });
  const [isActiveAlert, setIsActiveAlert] = useState(false);
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
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
        setCategory(state.data[0].id);
      }
    });
  }, []);
  const handleSave = async (e) => {
    e.preventDefault();

    if (
      product.name.trim() &&
      product.price.trim() &&
      product.description.trim() &&
      product.stock
    ) {
      if (!editProduct) {
        product.stock = Number(product.stock);
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("description", product.description);
        formData.append("stock", product.stock);
        formData.append("category[id]", Number(category));

        formData.append("image", selectedImage);

        try {
          await postProduct(formData).then((state) => {
            if (state.statusCode === 200) {
              state.data.category = categories.find(
                (item) => item.id == category
              );
              setRow([...rows, state.data]);
              setProduct({
                ...product,
                category: "",
                name: "",
                price: "",
                stock: "",
                description: "",
              });
              setAlert({
                message: state.message,
                severity: "success",
              });
              setIsActiveAlert(true);
            }
            if (state.statusCode === 400) {
              setAlert({
                message: state.message,
                severity: "error",
              });
              setIsActiveAlert(true);
            }
          });
        } catch (error) {
          if (error.response) {
            setAlert({
              message: error.response.data.message,
              severity: "error",
            });
            setIsActiveAlert(true);
          }
        }
      } else {
        product.stock = Number(product.stock);
        const formData = new FormData();
        formData.append("id", Number(product?.id));
        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("description", product.description);
        formData.append("stock", product.stock);
        formData.append("category[id]", Number(category));
        formData.append("image", selectedImage);

        try {
          await updateProduct(formData).then((state) => {
            if (state.statusCode === 200) {
              const newList = rows.map((item) => {
                if (item.id === product.id) {
                  return {
                    id: product.id,

                    name: product.name,

                    description: product.description,
                    price: product.price,
                    stock: product.stock,

                    category: categories.find((item) => item.id == category),
                  };
                } else {
                  return item;
                }
              });

              console.log(newList);
              setRow(newList);

              setProduct({
                ...product,
                category: "",
                name: "",
                price: "",
                stock: "",
                description: "",
              });
              setAlert({
                message: state.message,
                severity: "success",
              });
              setIsActiveAlert(true);
            }
            if (state.statusCode === 400) {
              setAlert({
                message: state.message,
                severity: "error",
              });
              setIsActiveAlert(true);
            }
          });
        } catch (error) {
          if (error.response) {
            setAlert({
              message: error.response.data.message,
              severity: "error",
            });
            setIsActiveAlert(true);
          }
        }
      }
    } else {
      setAlert({
        message: "se debe llenar todos los campos",
        severity: "error",
      });
      setIsActiveAlert(true);
    }
  };
  const handleCategory = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  const handleEdit = (product, category) => {
    setEditProduct(true);
    setProduct(product);
    setCategory(product?.category.id);
  };
  return (
    <div className="">
      {isActiveAlert && (
        <ActionAlerts
          message={alert?.message}
          severity={alert?.severity}
          setIsActiveAlert={setIsActiveAlert}
        />
      )}
      <div>
        <div className=" bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Agregar Producto</h2>
          <form onSubmit={handleSave}>
            <div className="flex">
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
            </div>
            <div className="flex">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Descripcion
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  value={product.description}
                  onChange={(e) => ChangeProduct(e)}
                  type="text"
                  placeholder="Ingrese una descripcion"
                />
              </div>
            </div>

            <div className="flex">
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
                  placeholder="Ingrese el stock del producto"
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
                  {categories?.map((category) => (
                    <option value={category.id} key={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex">
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
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {editProduct ? "Editar" : "Guardar"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell>Descripcion</StyledTableCell>
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
                <StyledTableCell component="th" scope="row">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">{row.stock}</StyledTableCell>
                <StyledTableCell align="right">
                  {row?.category?.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleEdit(row, category)}
                  >
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
