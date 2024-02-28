import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../redux/actions/todoActions";
import axios from "axios";
const AddForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const input = e.target[0];
    if (!input.value) {
      alert("Lütfen bir değer giriniz");
      return; // Boş değer varsa fonksiyondan çık
    }
    // store'a kaydedilecek veriyi hazırla
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    // veriyi API'ya ekle/gönder ve reducer'a iletilcek aksiyonu buraya bağla
    axios
      .post("/todos", newTodo)
      .then(() => dispatch(addTodo(newTodo)))
      .catch((err) => alert("İşlem gerçekleştirilemedi"));

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-3">
      <input
        className="form-control"
        placeholder="örn: redux öğren"
        type="text"
      />
      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};
export default AddForm;
