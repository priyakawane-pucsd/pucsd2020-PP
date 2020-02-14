#build :
#	 gcc src/main.c src/add.c src/sub.c src/mul.c src/divi.c src/percent.c -o main
#run :
#	 ./main
#clean:
#	rm main

build :
	gcc -c -Wall -Werror -fpic src/add.c src/sub.c src/mul.c src/divi.c src/percent.c 
	gcc -shared -o libfoo.so src/add.o src/divi.o src/mul.o src/sub.o src/percent.o
	gcc -L/home/piu/PP/calculator/dynamic_Linking_calculator/ -Wall -o main src/main.c -lfoo
	echo $LD_LIBRARY_PATH
	export LD_LIBRARY_PATH=/home/piu/PP/calculator/dynamic_Linking_calculator/src:$LD_LIBRARY_PATH
run :
	./main
clean :
	rm main		
