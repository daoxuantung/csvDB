## CSV Files with Node.js

# Introduction

The term CSV is an abbreviation that stands for comma-separated values.

A CSV file is a plain text file that contains data formatted according to the CSV standard. It has distinct lines which represent records and each field in the record is separated from another by a comma.

# Reading CSV Files 

To read a CSV file, we could use nothing else than just the fs module, as in essence the CSV file is a plain text file.

However, there are a couple of helpful modules that could handle generating or parsing the CSV content for us. We'll start by installing the module csv-parser: npm install --save csv-parser
  

# Writing CSV Files in Node.js

Remembering the fact that CSV files are just plain text files, we could always limit ourselves to using only the native fs module, but to make our life easier, we'll use another common npm module, csv-writer.

First goes the installation: npm i -s csv-writer
