from ctypes import cdll
import time
start = time.time()
lib = cdll.LoadLibrary("target/release/libembeber.dylib")
lib.procesar()
end = time.time()

elapsed = end - start 
print(elapsed)
print("completado!")