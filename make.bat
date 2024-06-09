set MODULE_NAME="cpp/main"
set OUTPUT_JS="src/wasm/main_wasm.js"
set OUTPUT_TS="src/wasm/main_wasm.ts"
set OUTPUT_WASM="src/wasm/core_wasm.wasm"

emcc %MODULE_NAME%.cpp -s EXPORTED_FUNCTIONS=%* -o %OUTPUT_JS% -s WASM=1 -s MALLOC=emmalloc -s ALLOW_MEMORY_GROWTH=1 -s EXPORT_ES6=1 -s MODULARIZE=1 -s EXPORT_NAME="$MODULE_NAME" -s ENVIRONMENT="web" -std=c++20 || exit 1