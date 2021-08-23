const { createSlice } = require("@reduxjs/toolkit");

//lấy data từ localStorage và chuyển nó về object
var data = JSON.parse(localStorage.getItem("photos"));

var s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring();
};

var generateID = () => {
  return s4() + s4() + "-" + s4() + s4() + "-" + s4() + s4();
};

const photo = createSlice({
  name: "photos",
  initialState: data ? data : [],
  reducers: {
    addPhoto: (state, action) => {
      //generate id cho item
      var data = { ...action.payload, id: generateID() };

      //thêm data vào redux
      state.push(data);

      // set data vào localStorage
      localStorage.setItem("photos", JSON.stringify(state));
    },
    removePhoto: (state, action) => {
      // lọc item có id truyền lên (vì RTK nên không cần clone)
      state = state.filter((photo) => photo.id !== action.payload);

      //lưu lại vào localStorage
      localStorage.setItem("photos", JSON.stringify(state));

      // trong RTK nếu tạo ra object mới thì nên return
      return state;
    },
    updatePhoto: (state, action) => {
        // tìm vị trí item trong mảng
      var newPhoto = action.payload;
      var index = state.findIndex((photo) => photo.id === newPhoto.id);
        //gán giá trị lại cho item cũ
      if (index >= 0) {
        state[index] = newPhoto;
      }
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
