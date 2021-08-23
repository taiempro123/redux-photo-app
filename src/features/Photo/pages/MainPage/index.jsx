import Banner from "components/Banner";
import Images from "constant/images";
import PhotoList from "features/Photo/components/PhotoList/indx";
import { removePhoto } from "features/Photo/Slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";

MainPage.propTypes = {};

function MainPage(props) {


  const dispatch = useDispatch();
  const history = useHistory();
  
  //lấy dữ liệu từ store
  const photos = useSelector((state) => state.photos);

  //bắt sự kiện khi người đùng click vào để edit
  const handlePhotoEditClick = (photo) => {
    
    //chuyển sang trang edit 
    history.push(`/photos/${photo.id}`);

  };


  //bắt sự kiện khi người đùng click vào để remove
  const handlePhotoRemoveClick = (photo) => {
      const action = removePhoto(photo.id);
      dispatch(action);
      
  };

  return (
    <div className="photo-main">
      <Banner
        title="🎉 Your awesome photos 🎉"
        backgroundUrl={Images.PINK_BG}
      />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
