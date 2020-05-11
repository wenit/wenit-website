---
title: go基础知识
keywords: go,byte
description: go基础知识
---

## string与[]byte相互转换

string 不能直接和byte数组转换

string可以和byte的切片转换

### string转为[]byte

``` go
var str string = "test"
var data []byte = []byte(str)
```

### byte转为string

``` go
var data [10]byte 
byte[0] = 'T'
byte[1] = 'E'
var str string = string(data[:])
```

