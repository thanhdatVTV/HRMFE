import axios from "../services/customize-axios";

const getBuildingList = (keyword, pageNumber, perPage) => {
    //console.log("ddddddd", `/api/lecturers/get-list?keyword=${keyword}&pageNumber=${pageNumber}&per_page=${perPage}`)
    return axios.get(`/api/toa-nha/get-list`, {keyword, pageNumber, perPage})
}

const createBuilding = ({MaTN, TenTN, CoSoId, TenCS}) => {
    return axios.post(`/api/toa-nha/add-toa-nha`, {MaTN, TenTN, CoSoId, TenCS});
}

const updateBuilding = ({Id, MaTN, TenTN, CoSoId, TenCS}) => {
    return axios.post(`/api/toa-nha/update-toa-nha`, {Id, MaTN, TenTN, CoSoId, TenCS});
}

const deleteBuilding = (Id) => {
    return axios.post(`/api/toa-nha/delete-toa-nha`, {Id});
}

export { getBuildingList, createBuilding, updateBuilding, deleteBuilding };