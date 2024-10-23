# labwork3_465554 README


## Общее описнаие решения 
### Это расширение содержит две функции: ReverseFor и  ChangeCout.
### ReverseFor - функция, которая позволяет преобразовывать циклы for так, чтобы они шли с конца.

### ChangeCout - функция, которая вставляет пробелы межды аргументами для std::cout, или добавляет функция переноса в конце.
## общее описание каждой из функций
#### ReverseFor работает с выделенной областью, для применения необходимо выбрать строку и нажать сочетание клавиш "ctrl + f1"
```
for(int i = 0; i <= n; i++) -> for (int i = n; i >= 0; i--) 
```

#### ChangeCout работает с выделенной областью, для применения необходимо выбрать строку и нажать сочетание клавиш "ctrl + f2", между аргументами вставятся пробелы. Если в конце выделенной области стояла ";" то добавится "\n".
```
std::cout<<1<<2<<3 -> std::cout<<1<<' '<<2<<' '<<3
std::cout<<1<<2<<3; -> std::cout<<1<<' '<<2<<' '<<3<<'\n';
```