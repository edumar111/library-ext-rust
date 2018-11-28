require 'ffi'

module Embeber
	extend FFI::Library
	ffi_lib 'target/release/libembeber.dylib'
	attach_function :procesar, [], :void
end

Embeber.procesar
puts 'completado!'