# Objects - Big-O
An object is collection of key value pairs
```javascript
const person = {
    firstname: 'Bruce',
    lastname: 'Wayne'
}
```
<u>__Time Complexity__</u>

>Insert - __O(1)__
>
>Remove - __O(1)__
>
>Access - __O(1)__
>
>Search - __O(n)__
>
>Object.keys() - __O(n)__
>
>Object.values() - __O(n)__
>
>Object.entries() - __O(n)__

# Arrays - Big-O
An array is an ordered collection of values
```javascript
const odds = [1, 3, 5, 7, 9]
```

<u>__Time Complexity__</u>

>Insert/Remove at end - __O(1)__
>
>Insert/Remove at beginning - __O(n)__
>
>Access - __O(1)__
>
>Search - __O(n)__
>
>Push/Pop - __O(1)__
>
>Shift/Unshift/Concat/Slice/Splice - __O(n)__
>
>forEach/Map/Filter/Reduce - __O(n)__