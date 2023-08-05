husky install

RESUME_INFO_EXAMPLE_FILE=src/configs/resume-info-example.js
RESUME_INFO_FILE=src/configs/resume-info.js

if [ ! -f $RESUME_INFO_FILE ]; then
  cp src/configs/resume-info-example.js src/configs/resume-info.js
  echo Successfully created $RESUME_INFO_FILE
  echo Please fill in your own resume data, and modify components when necessary.
fi
