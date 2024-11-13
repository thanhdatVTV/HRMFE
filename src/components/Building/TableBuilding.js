import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getBuildingList, createBuilding, updateBuilding, deleteBuilding } from '../../services/BuildingService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './AddNew';
import ModalEdit from './Edit';
import ModalConfirm from '../Modal/Confirm';
import '../TableUser.scss'
import _, { debounce } from "lodash";
import './Building.scss'


const TableBuilding = (props) => {

    const [listBuilding, setListBuilding] = useState([]);
    const [totalBuilding, setTotalBuilding] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [dataBuildingEdit, setDataBuildingEdit] = useState({});

    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataBuildingDelete, setDataBuildingDelete] = useState({});

    const [sortBy, setSortBy] = useState("asc");
    const [sortField, setSortField] = useState("id");

    const [keyword, setKeyword] = useState("");

    const inputFieldsAddNew = [
        { name: "MaTN", label: "Mã tòa nhà", type: "text" },
        { name: "TenTN", label: "Tên tòa nhà", type: "text" },
        { name: "CoSoId", label: "Cơ sở", type: "text" },
    ];
    const inputFieldsEdit = [
        { name: "MaTN", label: "Mã tòa nhà", type: "text" },
        { name: "TenTN", label: "Tên tòa nhà", type: "text" },
        { name: "CoSoId", label: "Cơ sở", type: "text" },
    ];

    const handleClose = () => {
        setIsShowModalAddNew(false);
        setIsShowModalEdit(false);
        setIsShowModalDelete(false);
    }

    const handleUpdateTable = () => {
        // setListLecturers([Lecturers, ...listLecturers]);
        getBuilding("", 1, 6);
    }

    const handleEditBuildingFromModal = (Building) => {
        // let cloneListLecturerss = _.cloneDeep(listLecturers);
        // let index = listLecturers.findIndex(item => item.id === Lecturers.id);
        // cloneListLecturerss[index].typeName = Lecturers.typeName;
        // setListLecturers(cloneListLecturerss);
        getBuilding("", 1, 6);
    }

    useEffect(() => {
        //call api
        getBuilding("", 1, 6);
    }, [])

    const getBuilding = async (keyword, pageNumber, perPage) => {

        let res = await getBuildingList(keyword, pageNumber, perPage);
        if (res && res.response) {
            setTotalBuilding(res.response.total)
            setTotalPages(res.response.totalPages)
            setListBuilding(res.response)
        }
    }

    const handlePageClick = (event) => {
        getBuilding("", +event.selected + 1, 6)
    }

    const handleEditBuilding = (Building) => {
        setDataBuildingEdit(Building);
        setIsShowModalEdit(true);
    }

    const handleDeleteBuilding = (Building) => {
        setIsShowModalDelete(true);
        setDataBuildingDelete(Building);
    }

    const handleDeleteBuildingFromModal = (Building) => {
        // let cloneListLecturerss = _.cloneDeep(listLecturers);
        // cloneListLecturerss = cloneListLecturerss.filter(item => item.id !== Lecturers.id);
        // setListLecturers(cloneListLecturerss);
        getBuilding("", 1, 6);
        console.log('d1', listBuilding);

    }

    const handleSort = (sortBy, sortField) => {
        setSortBy(sortBy);
        setSortField(sortField);
        let cloneListBuilding = _.cloneDeep(listBuilding);
        cloneListBuilding = _.orderBy(cloneListBuilding, [sortField], [sortBy])
        setListBuilding(cloneListBuilding);
        console.log('d1', listBuilding);

    }

    const handleSearch = debounce((event) => {
        let term = event.target.value;
        if (term) {
            let cloneListBuilding = _.cloneDeep(listBuilding);
            cloneListBuilding = cloneListBuilding.filter(item => {
                return (
                    item.data.MaTN.includes(term) ||
                    item.data.TenCS.includes(term) ||
                    item.data.TenTN.includes(term)
                    // Thêm các điều kiện khác nếu cần
                );
            });
            setListBuilding(cloneListBuilding);
        }
        else {
            getBuilding("", 1, 6);
        }
    }, 500)

    return (
        <>
            <div className='Building-container'>
                <div class="box-header">
                    <h3 class="box-title">
                        DANH SÁCH TÒA NHÀ
                    </h3>
                </div>
                <div className="my-3 add-new">
                    <span><b></b></span>
                    <button className='btn btn-success' onClick={() => setIsShowModalAddNew(true)}>Thêm Tòa Nhà Mới</button>
                </div>
                <div className='col-4 my-3'>
                    <input
                        className='form-control'
                        placeholder='Search...'
                        onChange={(event) => handleSearch(event)}
                    />
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>
                                <div className='sort-header'>
                                    <span>MaTN</span>
                                    <span>
                                        <i
                                            className="fa-solid fa-arrow-down-long"
                                            onClick={() => handleSort("desc", "MaTN")}
                                        >
                                        </i>
                                        <i
                                            className="fa-solid fa-arrow-up-long"
                                            onClick={() => handleSort("asc", "MaTN")}
                                        >
                                        </i>
                                    </span>
                                </div>
                            </th>
                            <th>
                                <div className='sort-header'>
                                    <span>Tên Tòa Nhà</span>
                                    <span>
                                        <i
                                            className="fa-solid fa-arrow-down-long"
                                            onClick={() => handleSort("desc", "TenTN")}
                                        >
                                        </i>
                                        <i
                                            className="fa-solid fa-arrow-up-long"
                                            onClick={() => handleSort("asc", "TenTN")}
                                        >
                                        </i>
                                    </span>
                                </div>
                            </th>
                            <th>
                                <div className='sort-header'>
                                    <span>Tên Cơ Sở</span>
                                    <span>
                                        <i
                                            className="fa-solid fa-arrow-down-long"
                                            onClick={() => handleSort("desc", "TenCS")}
                                        >
                                        </i>
                                        <i
                                            className="fa-solid fa-arrow-up-long"
                                            onClick={() => handleSort("asc", "TenCS")}
                                        >
                                        </i>
                                    </span>
                                </div>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listBuilding && listBuilding.length > 0 &&
                            listBuilding.map((item, index) => {
                                return (
                                    <tr key={`users-${index}`}>
                                        <td>{item.data.MaTN}</td>
                                        <td>{item.data.TenTN}</td>
                                        <td>{item.data.TenCS}</td>
                                        <td>
                                            <button
                                                className='btn btn-warning mx-3'
                                                onClick={() => handleEditBuilding(item)}
                                            >Edit</button>
                                            <button
                                                className='btn btn-danger'
                                                onClick={() => handleDeleteBuilding(item)}
                                            >Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPages}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName='active'
                />
                <ModalAddNew
                    show={isShowModalAddNew}
                    handleClose={handleClose}
                    createApi={createBuilding}
                    handleUpdateTable={handleUpdateTable}
                    title="Thêm Tòa Nhà"
                    buttonText="Save changes"
                    successMessage="Thêm mới thành công!"
                    errorMessage="Thêm mới thất bại."
                    inputFields={inputFieldsAddNew}
                />
                <ModalEdit
                    show={isShowModalEdit}
                    dataEdit={dataBuildingEdit}
                    handleClose={handleClose}
                    handleEditFromModal={handleEditBuildingFromModal}
                    updateApi={updateBuilding}
                    title="Cập nhật Tòa nhà"
                    successMessage='Cập nhật thành công!'
                    inputFields={inputFieldsEdit}
                />
                <ModalConfirm
                    show={isShowModalDelete}
                    handleClose={handleClose}
                    dataDelete={dataBuildingDelete}
                    handleDeleteFromModal={handleDeleteBuildingFromModal}
                    deleteApi={deleteBuilding}
                    title='Xác nhận xóa'
                    successMessage='Xóa thành công!'
                />
            </div>
        </>)
}

export default TableBuilding;