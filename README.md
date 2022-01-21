# softdocs-lib
Softdocs Javascript Functions Library

To add this function library to your form, add the following line to the "define" array at the beginning of your viewmodel.js file

```
'https://kstateome.github.io/softdocs-lib/js/lib.js',
```

![viewmodel](https://kstateome.github.io/softdocs-lib/img/viewmodel.png)

### Alternative Method

An alternative option is to use the form editor menu:

> Form Options > Add items between your head tags
```
<script src="https://kstateome.github.io/softdocs-lib/js/lib.js"></script>
```

## Code

### FORM OPTIONS

Formats money fields (text) to use commas
> Run inside the vm.afterLoad() block
```
initMoneyCommas();
```

Formats email address fields (text) marked with a "maskemail" class as eid@ksu.edu
> Run inside the vm.afterLoad() block
```
initEmailKSU();
```

Prevents form suggestion
> Run inside the vm.afterLoad() block
```
disableAutocomplete();
```

### LOADING MESSAGE

Shows a loading message immediately as the form begins to load.
> Run in the vm.viewmodel() block
```
showFormLoadingMessage(true);
```

Hides the loading message after the form has finished loading.
> Run in the vm.afterLoad() block
```
showFormLoadingMessage(false);
```

### ARRAY FUNCTIONS

Returns unique values from a text array
```
var arr = uniqueTxtArray(arr);
```

Returns unique objects from an object array (also works for a text array)
```
var arr = uniqueObjArray(arr);
```
