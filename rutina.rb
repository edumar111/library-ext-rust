require 'date'

current_init = Time.now

threads = []
10.times do
  	threads << Thread.new do
     	count = 0
    	1000_000.times do
      		count += 1
      		puts count
		end 
	end
end
threads.each { |t| t.join }
current_time = Time.now
diff = current_time - current_init   
#puts current_time.strftime("%H:%M:%S")
puts diff
puts "completado!"