if [ ! -f ./src/configs/resume-info.js ]; then
  echo "Error: make sure you have create @/configs/resume-info.js for resume data."
  exit 1
fi

if [ ! -f ./src/assets/resume-photo.* ]; then
  echo "Warning: make sure you have resume photo file if you want to use it inside your resume."
fi
