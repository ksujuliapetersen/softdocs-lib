# softdocs-lib
Softdocs Javascript Functions Library

To add this function library to your form, add the following line to the "define" array at the beginning of your viewmodel.js file

```
'https://kstateome.github.io/softdocs-lib/1.1.0/lib.js',
```

![viewmodel](https://kstateome.github.io/softdocs-lib/img/viewmodel.png)

## Code

### FORMATTING OPTIONS

Use the selected formatting options on the form
> Run inside the vm.afterLoad() block
```
ksu.format(['noautocomplete', 'moneycommas', 'emailksu', 'hidedisabledbuttons', 'dropdownarrows']);
```

**noautocomplete** prevents form suggestion

**moneycommas** formats money fields (text) to use commas

**emailksu** formats email address fields (text) marked with a "maskemail" class as eid@ksu.edu

**hidedisabledbuttons** buttons will automatically become hidden when disabled, and then automatically become visible again when they are enabled

**dropdownarrows** add drop-down arrows to input fields with an autocomplete data-bind

### LOADING MESSAGE

Shows a loading message immediately as the form begins to load.
> Run in the vm.viewmodel() block
```
ksu.showFormLoadingMessage();
```

Hides the loading message after the form has finished loading.
> Run in the vm.afterLoad() block
```
ksu.hideFormLoadingMessage();
```

### ARRAY FUNCTIONS

Returns unique values from a text array
```
var arr = ksu.uniqueTxtArray(arr);
```

Returns unique objects from an object array (also works for a text array)
```
var arr = ksu.uniqueObjArray(arr);
```
