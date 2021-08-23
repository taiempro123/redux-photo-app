import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto, updatePhoto } from "features/Photo/Slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

AddEdit.propTypes = {};

function AddEdit(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;

  const editPhoto = useSelector((state) =>
    state.photos.find((x) => x.id === photoId)
  );

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editPhoto;

  //bắt sự kiện khi người dùng submit form
  const handleSubmit = (value) => {
    return new Promise((resolve) => {
      //tạo hiệu ứng loading trong 2s = 2000ms
      setTimeout(() => {
        if (isAddMode) {
          //gọi tới addPhoto trong reducer
          const action = addPhoto(value);

          //gửi action lên reducer
          dispatch(action);
          resolve(true);
        } else {
          //gọi tới updatePhoto trong reducer
          const action = updatePhoto(value);
          //gửi action lên reducer
          dispatch(action);
          resolve(true);
        }

        //trở lại trang photos khi add xong
        history.push("/photos");
      }, 2000);
    });
  };
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleSubmit} initialValues={initialValues}  isAddMode = {isAddMode}/>f
      </div>
    </div>
  );
}

export default AddEdit;
