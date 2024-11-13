import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from 'react-toastify';
import { useEffect } from "react";
import { getCoSoList } from "../../services/CoSoService";

const ModalEdit = (props) => {
    const { show, handleClose, dataEdit, updateApi, handleEditFromModal, title, successMessage, inputFields } = props;
    const [inputValues, setInputValues] = useState({});
    const [listCoSo, setListCoSo] = useState([]);
    const [selectedCoSo, setSelectedCoSo] = useState('');
    const [selectedTenCS, setSelectedTenCS] = useState('');

    useEffect(() => {
        getCoSoList("", 1, 4).then(response => {
            const dataList = response.response.map(item => {
                return {
                    id: item.id,
                    TenCS: item.data.TenCS
                };
            });
            setListCoSo(dataList);
        }).catch(error => {
            console.error("Error fetching CoSo list", error);
        });
    }, []);

    const handleSelectCoSo = (value) => {
        const coSoTen = listCoSo.find(coSo => coSo.id === value).TenCS;
        setInputValues({ ...inputValues, TenCS: coSoTen, CoSoId: value });

    };

    const handleInputChange = (fieldName, value) => {
        setInputValues({ ...inputValues, [fieldName]: value });
    };

    const handleEdit = async () => {
        let res = await updateApi({ ...inputValues, Id: dataEdit.id});
        if (res) {
            //success
            handleEditFromModal({
                ...inputValues,
                Id: dataEdit.id
            })
            handleClose();
            toast.success(successMessage);
        }
        else {
            //error
        }
        console.log(res);
    }

    useEffect(() => {
        if (show) {
            setInputValues({ ...dataEdit.data, Id: dataEdit.id });
        }
    }, [dataEdit])

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <form>
                        {inputFields.map((field, index) => (
                            <div key={index} className="mb-3">
                                <label className="form-label">{field.label}</label>
                                <input
                                    type={field.type}
                                    className="form-control"
                                    value={inputValues[field.name] || ''}
                                    onChange={(event) => handleInputChange(field.name, event.target.value)}
                                />
                            </div>
                        ))}
                    </form> */}
                    <form>
                        {inputFields.map((field, index) => {
                            if(field.name === "CoSoId"){
                                return (
                                    <div key={index} className="mb-3">
                                        <label className="form-label">Select CoSo</label>
                                        <select
                                            className="form-select"
                                            // value={selectedCoSo}
                                            onChange={(event) => {
                                                // setSelectedCoSo(event.target.value); 
                                                handleSelectCoSo(event.target.value);
                                            }}
                                        >
                                            <option value="">None</option>
                                            {listCoSo.map((coSo) => (
                                                <option key={coSo.id} value={coSo.id}>{coSo.TenCS}</option>
                                            ))}
                                        </select>
                                    </div>
                                )
                            } else {
                                return (
                                    
                                    <div key={index} className="mb-3">
                                        <label className="form-label">{field.label}</label>
                                        <input
                                            type={field.type}
                                            className="form-control"
                                            value={inputValues[field.name] || ''}
                                            onChange={(event) => handleInputChange(field.name, event.target.value)}
                                        />
                                    </div>    
                                )
                            }
                            
                        })}
                    
                        
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>Close</Button>
                    <Button variant="primary" onClick={() => handleEdit()}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalEdit;

