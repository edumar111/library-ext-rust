from ctypes import cdll
lib = cdll.LoadLibrary("target/release/libembeber.dylib")
lib.procesar()
print("completado!")