use std::thread;

#[no_mangle]
pub extern fn procesar() {
   let handles: Vec<_> = (0..10).map(|_|{
   		thread::spawn(|| {
   			let mut x= 0;
   			for _ in 0..30_000 {
   				x += 1;
               println!("numero: {}", x);
   			}
   		})
   }).collect();
   for h in handles {
   		h.join().ok().expect("No se pudo unir un hilo");
   }
}
