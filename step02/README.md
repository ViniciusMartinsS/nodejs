
# JavaScript Data Structures

Running Project

```
$ METHOD=set npm run step02
$ METHOD=map npm run step02
``` 

### Primitive Types

Once we talk about primitive types, we can say they are not
an object and do not have methods of its own.
We can also affirm that primitive types are immutable.

So, these are the primitive types of javascript:
- Boolean (True & False);
- Null (No value);
- Undefined (Declared variable without a value);
- Number (Integer, double, float);
- String (Words & an array of character);
- Symbol (A unique value that is not equal to any other value). *

Everything else in javascript is an object type.

### Object Types

The following types are in the <b>object types list</b> even though they are in the <b>primitive list</b> as well.

So, these are some of the object types of javascript:
- Boolean
- Number
- String
- Symbol (But does not use new notation)

### Usage

```js
const a = 'String'
console.log(a) // Output => 'String'

const b = new String('String')
console.log(b) // Output => [String: 'String']
console.log(b.valueOf()) // Output => 'String'

a.add = 'String Addition'
console.log(a.add) // Output => undefined
console.log(a) // Output => 'String'

b.add = 'String Addition'
console.log(b.add) // Output => 'String Addition'
console.log(b) // { [String: 'String'] add: 'String Addition' }

a == b // Returns => true
a === b // Returns => false
```
<b>Obs</b>: Same happens to others object types in the list above.

_____

### Truthy & falsy

As well as a type, each value also has an inherent boolean value, generally known as either truthy or falsy. (Copied from article)

Values always <b>falsy</b>:
  - false;
  - 0;
  - "" (empty string);
  - null;
  - undefined;
  - NaN

  Values always <b>Truthy</b>:

  - Basically everything else.

  <b>TIP</b>: Nice to use "!!" to convert to boolean

  _____

### Memory Usage

To measure nodejs process execution, we use the following command:

```js
process.memoryUsage()
```

This method returns an object with the following properties:

```
{
  rss: value in bytes,
  heapTotal: value in bytes,
  heapUsed: value in bytes,
  external: value in bytes
}
```

I'd like to highlight this explanation of devdocs about the returned object:

<b> heapTotal and heapUsed refer to V8's memory usage. external refers to the memory usage of C++ objects bound to JavaScript objects managed by V8. rss, Resident Set Size, is the amount of space occupied in the main memory device (that is a subset of the total allocated memory) for the process, which includes the heap, code segment and stack. </b>

### Research

Sources:
- [Medium Post | Primitive/Object](https://codeburst.io/javascript-essentials-types-data-structures-3ac039f9877b)
- [Site Point Post | Truthy/Falsy](https://www.sitepoint.com/javascript-truthy-falsy/)

### Doubts

- Not sure if I really got the idea of <b>symbol type</b> on primitive types;
- Why would I use object type when I do have primitive type?
- I did not get how WeakSet works. What is the point of using it?
