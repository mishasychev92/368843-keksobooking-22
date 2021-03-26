const avatarFileChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const photoFileChooser = document.querySelector('.ad-form__input');
const photoPreview = document.querySelector('.ad-form__photo');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const AVATAR_DEFAULT_SRC = 'img/muffin-grey.svg';

avatarFileChooser.addEventListener('change', () => {
  const file = avatarFileChooser.files[0];
  const fileName = file.name.toLowerCase();
    
  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });
    
  if (matches) {
    const reader = new FileReader();
      
    reader.addEventListener('load', () => {
      avatarPreview.src = reader.result;
    });
      
    reader.readAsDataURL(file);
  }
});

photoFileChooser.addEventListener('change', () => {
  const file = photoFileChooser.files[0];
  const fileName = file.name.toLowerCase();
    
  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });
    
  if (matches) {
    const reader = new FileReader();
      
    reader.addEventListener('load', () => {
      photoPreview.innerHTML = '';
      const newPhoto = document.createElement('img');
      newPhoto.width = photoPreview.offsetWidth;
      newPhoto.height = photoPreview.offsetHeight;
      newPhoto.src = reader.result;
      photoPreview.appendChild(newPhoto);
    });
      
    reader.readAsDataURL(file);
  }
});

const resetImagePreview = () => {
  avatarPreview.src = AVATAR_DEFAULT_SRC;
  photoPreview.innerHTML = '';
};

export { resetImagePreview };