import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/actions/todoActions";
import axios from "axios";
const Modal = ({ close, todo }) => {
  const dispatch = useDispatch();
  // from göndeince tetiklenir.
  const handleSubmit = (e) => {
    e.preventDefault();
    // inputtaki değeri al
    const newInput = e.target[1].value;

    // todo nesnesinin title değerine yeni değeri ata
    const updatedTodo = { ...todo, text: newInput };
    // store'u güncelle
    axios
      .put(`/todos/${updatedTodo.id}`, updatedTodo)
      .then(() => dispatch(updateTodo(updatedTodo)));

   const newInput.value = ""
    // modalı kapat
    close();
  };
  return (
    <div class="modal d-block bg-black bg-opacity-50 text-dark">
      <div class="modal-dialog modal-dialog-centered">
        <form onSubmit={handleSubmit} class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Yeni bir todo giriniz</h1>
            <button onClick={close} type="button" class="btn-close"></button>
          </div>
          <div class="modal-body">
            <label>Yeni başlık</label>
            <input
              defaultValue={todo.text}
              className="form-control mt-2 shadow"
              type="text"
            />
          </div>
          <div class="modal-footer">
            <button onClick={close} type="button" class="btn btn-secondary">
              İptal
            </button>
            <button type="submit" class="btn btn-primary">
              Değişiklikleri Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
