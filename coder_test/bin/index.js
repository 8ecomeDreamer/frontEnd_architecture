#!/usr/bin/env node

// 注册一个命令 init
const lib=require ("first_package_lib")

const argv=require ("process").argv

const command = argv[2]

console.log(command)

// 实现参数解析