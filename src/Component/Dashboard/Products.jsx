import { CircleAlert, Edit, Grid3X3, Pencil, Plus, Search, Table2, Trash, Trash2, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import camera from '../../images/camera.jpg'
import earbuds from '../../images/earbuds.jpg'
import garage_tool from '../../images/garage_tool.jpg'
import gitar from '../../images/gitar.jpg'
import laptop_bag from '../../images/laptop_bag.jpg'
import shoes from '../../images/shoes.jpg'
import smart_tv from '../../images/smart_tv.jpg'
import smartwatch from '../../images/smartwatch.jpg'
import wirelessmouse from '../../images/wirelessmouse.jpg'

const Products = ({ currentPage, setCurrentPage }) => {
  const [productData, setProductData] = useState([])
  const [edit_viewer, setEditViewer] = useState(false)
  const [newQuant, setNewQuant] = useState("")
  const [NewTitle, setNewTitle] = useState()
  const [NewDesc, setNewDesc] = useState("")
  const [newPrice, setNewPrice] = useState("")
  const [productID, setProductId] = useState("")
  const [deleteConf, setDeleteConf] = useState(false)
  const [deleteId, setdeleteId] = useState("")
  const [searchData, setSearchData] = useState("")
  const [searchRes, setSearchRes] = useState([])
  const [searchResShow, setSearchResShow] = useState(false)

  let productDatas = [
    {
      id: 1,
      img: camera,
      productName: "Professional DSLR Camera",
      productDesc: "High-performance DSLR camera with premium zoom lens, ideal for photography and videography.",
      productPrice: 89999,
      category: "Electronics",
      availableQuantity: 50,
      quantity: 100,
      stock: "active"
    },
    {
      id: 2,
      img: gitar,
      productName: "Electric Guitar Kit",
      productDesc: "Premium electric guitar with picks, cassette, and looper drum pedal for musicians.",
      productPrice: 24999,
      category: "Music",
      availableQuantity: 70,
      quantity: 200,
      stock: "active"
    },
    {
      id: 3,
      img: laptop_bag,
      productName: "Smart Anti-Theft Backpack Set",
      productDesc: "Durable carbon-fiber style anti-theft backpacks with modern design and USB charging.",
      productPrice: 12999,
      category: "Bags",
      availableQuantity: 72,
      quantity: 150,
      stock: "active"
    },
    {
      id: 4,
      img: smart_tv,
      productName: "Smart TV Streaming Service",
      productDesc: "High-resolution smart TV display showcasing top streaming content and entertainment options.",
      productPrice: 49999,
      category: "Electronics",
      availableQuantity: 80,
      quantity: 200,
      stock: "active"
    },
    {
      id: 5,
      img: wirelessmouse,
      productName: "Wireless Gaming Mouse",
      productDesc: "Lightweight, high-precision wireless gaming mouse for smooth and responsive control.",
      productPrice: 2999,
      category: "Accessories",
      availableQuantity: 0,
      quantity: 50,
      stock: "active"
    },
    {
      id: 6,
      img: garage_tool,
      productName: "Premium Tool Kit Set",
      productDesc: "Complete wall-mounted tool set including drills, wrenches, pliers, screwdrivers, and more.",
      productPrice: 15999,
      category: "Tools",
      availableQuantity: 100,
      quantity: 300,
      stock: "active"
    },
    {
      id: 7,
      img: smartwatch,
      productName: "Smart Fitness Watch",
      productDesc: "Modern smartwatch with fitness tracking, notifications, and customizable watch faces.",
      productPrice: 7999,
      category: "Wearables",
      availableQuantity: 200,
      quantity: 400,
      stock: "active"
    },
    {
      id: 8,
      img: earbuds,
      productName: "Premium Wireless Earbud", productDesc: "A collection of high-ended true wireless earbuds w...",
      productPrice: 399993,
      category: "Electric",
      availableQuantity: 500,
      quantity: 1000,
      stock: "active"
    }
  ]

  let searchDataFun = async (funData) => {
    let response = productDatas.filter(product =>
      product.productName.toLowerCase().includes(funData.toLowerCase().replace(" ", ""))
    );
    setSearchResShow(true)

    setSearchRes(response)

  }

  return (
    <div>
      <div className="header flex justify-between size-full">
        <div className="filter_search mt-7">
          <input type="text" name="filter" id="filter" className="border outline-black size-full md:w-100 p-2 rounded-lg" placeholder="Search for products" value={searchData} onChange={(e) => setSearchData(e.target.value)} />
          <span className="absolute justify-self-end self-center mr-auto md:mr-1 cursor-pointer" onClick={() => searchData.length > 0 ? searchDataFun(searchData) : setSearchResShow(false)}><Search /></span>
        </div>
        <div className="addBtn justify-self-end flex align-center mt-7 pr-[2.2%]">
          <button className="flex flex-row outline-gray-300 bg-blue-500 p-1.5 rounded-md text-white font-bold cursor-pointer" onClick={() => setCurrentPage("Add Product")}>
            <span className="self-center"><Plus width={25} height={20} stroke="white" />
            </span>
            <p className="self-center text-[10px] md:text-[medium]">Add Product</p></button>
        </div>
      </div>

      <div className="product_card flex flex-wrap gap-y-5 mt-5">
        {deleteConf && (
          <div className="confirmation w-100 fixed bg-white rounded-xl content-center" style={{ justifySelf: "anchor-center" }}>
            <CircleAlert className="justify-self-center my-5" stroke="red" width={150} height={50} />
            <p className="px-10 text-center text-xl my-5">Are you sure you want to delete this product?</p>
            <div className="btns justify-self-center my-3 flex flex-row gap-5">
              <button className="bg-red-500 w-35 font-semibold text-white text-lg p-3 rounded-xl hover:bg-red-400 cursor-pointer" onClick={() => setDeleteConf(!deleteConf)} >Yes, I'm Sure</button>
              <button className="border outline-gray-500 w-35 font-semibold text-slate-700 text-lg p-3 rounded-xl hover:bg-slate-50 cursor-pointer" onClick={() => setDeleteConf(!deleteConf)}>No, Cancel</button>
            </div>
          </div>)}

        {!searchResShow ? (
          productDatas.map((item, idx) => (
            <div
              className="card w-[100] md:w-[32%] lg:w-[32%] mr-2 bg-white shadow rounded-lg overflow-hidden p-3"
              key={idx}>
              <div className="card_img">
                <img src={item.img} alt="" className="aspect-3/2 rounded-lg select-none" />
              </div>
              <div className="product_details mt-2">
                <p className="overflow-hidden text-ellipsis whitespace-nowrap" >{item.productDesc}</p>

                <div className="flex justify-between my-2">
                  <p className="w-fit" >₹{item.productPrice}</p>

                  <p className={`font-medium w-fit p-1 rounded-md ${item.availableQuantity >= 1 ? "text-blue-500 bg-blue-50" : "text-red-500 bg-red-50"}`}>
                    {item.availableQuantity >= 1 ? "Available" : "Out Of Stock"}
                  </p>
                </div>
                <div className="edit_btn flex justify-between mt-4">
                  <button className="flex gap-3 border text-white bg-blue-600 hover:bg-blue-500 cursor-pointer border-slate-800 rounded-md py-2 px-5 select-none" onClick={() => (setNewTitle(item.productName), setNewDesc(item.productDesc), setNewQuant(item.availableQuantity), setEditViewer(true), setNewPrice(item.productPrice), setProductId(item.productId))} ><span className="h-fit self-center"><Pencil height={22} /></span> <p className="text-[10] md:text-[12px] md:self-center lg:text-[large]" >Edit</p></button>
                  <button className="flex gap-5 border text-white bg-red-600 hover:bg-red-700 cursor-pointer border-slate-800 rounded-md py-2 px-5 select-none" onClick={() => (setDeleteConf(!deleteConf), setdeleteId(item.productId))} ><span className="self-center"><Trash2 stroke="white" height={22} /></span><p className="text-[10] md:text-[12px] md:self-center lg:text-[medium]">Delete</p></button>
                </div>
              </div>
            </div>
          ))
        )
          : (Array.isArray(searchRes) &&
            searchRes.length > 0 ? (
            searchRes.map((item, idx) => (
              <div
                className="card w-[100] md:w-[32%] lg:w-[32%] mr-2 bg-white shadow rounded-lg overflow-hidden p-3"
                key={idx}>
                <div className="card_img">
                  <img src={item.img} alt="" className="aspect-3/2 rounded-lg select-none" />
                </div>
                <div className="product_details mt-2">
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap" >{item.productDesc}</p>

                  <div className="flex justify-between my-2">
                    <p className="w-fit" >₹{item.productPrice}</p>

                    <p className={`font-medium w-fit p-1 rounded-md ${item.availableQuantity >= 1 ? "text-blue-500" : "text-red-500"}`}>
                      {item.availableQuantity >= 1 ? "Available" : "Out Of Stock"}
                    </p>
                  </div>
                  <div className="edit_btn flex justify-between mt-4">
                    <button className="flex gap-3 border text-white bg-blue-600 hover:bg-blue-500 cursor-pointer border-slate-800 rounded-md py-2 px-5 select-none" onClick={() => (setNewTitle(item.productName), setNewDesc(item.productDesc), setNewQuant(item.availableQuantity), setEditViewer(true), setNewPrice(item.productPrice), setProductId(item.productId))} ><span className="h-fit self-center"><Pencil height={22} /></span> <p className="text-[10] md:text-[12px] md:self-center lg:text-[large]" >Edit</p></button>
                    <button className="flex gap-5 border text-white bg-red-600 hover:bg-red-700 cursor-pointer border-slate-800 rounded-md py-2 px-5 select-none" onClick={() => (setDeleteConf(!deleteConf), setdeleteId(item.productId))} ><span className="self-center"><Trash2 stroke="white" height={22} /></span><p className="text-[10] md:text-[12px] md:self-center lg:text-[medium]">Delete</p></button>
                  </div>
                </div>
              </div>
            )
            )
          )
            : (
              <>
                <input type="hidden" name="hid" value={searchRes.productDesc} />
                <p>No Data Found!</p>
              </>
            )
          )
        }
      </div>

      <div className={`edit_overlay ${edit_viewer ? "fixed inset-0 backdrop-blur-[1px] overflow-auto" : "hidden"}`} style={{ scrollbarWidth: "none" }}>
        {edit_viewer && (
          <form >
            <div className="edit_viwer w-[40%] gap-5 absolute top-15 bg-[#FFFFFF] flex flex-col p-8 justify-self-center rounded-md">
              <h1 className="font-semibold text-2xl w-fit">Edit Product</h1>
              <X className="absolute self-end cursor-pointer" onClick={() => setEditViewer(!edit_viewer)} />
              <div className="flex flex-col">
                <label htmlFor="EditTitle" className="font-semibold">Product Name</label>
                <input type="text" className="border border-[#D1D5DB] outline-[#0891B2] p-2 rounded-xl" name="edit_title" id="edit_title" value={NewTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Product Title" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="editdesc" className="font-semibold">Product Details</label>
                <input type="text" className="border border-[#D1D5DB] outline-[#0891B2] p-2 rounded-xl" name="edit_desc" id="edit_desc" value={NewDesc} onChange={(e) => setNewDesc(e.target.value)} placeholder="Product Details" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="editPrice" className="font-semibold">Edit Price</label>
                <input type="number" className="border border-[#D1D5DB] outline-[#0891B2] p-2 rounded-xl" name="edit_quan" id="edit_quan" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} placeholder="Product Price" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="editquantity" className="font-semibold">Edit Quantity</label>
                <input type="number" className="border border-[#D1D5DB] outline-[#0891B2] p-2 rounded-xl" name="edit_quan" id="edit_quan" value={newQuant} onChange={(e) => setNewQuant(e.target.value)} placeholder="Product Quantity" />
              </div>

              <button type="submit" className="w-fit text-2xl rounded-md px-4 py-1 bg-[#0891B2] cursor-pointer">Save</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default Products
