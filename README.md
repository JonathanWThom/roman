# Roman Numeral converter
_Epicodus Introduction to Programming exercise, Week Three, 10-27-16_
by Jonathan Tom and Suzi Rubino

# Description
Create web page with form for submitting number to convert to roman numeral.

# Specifications
Deals with non-numeric values
input = a
output = undefined alert

Deals with negative numbers
input = -2
output = undefined alert

Deals with converting zero (there is no roman numeral for zero)
input = 0
output = empty value

Not greater than 3999
input = 4000
output = stop it

if 5, then V
if 10, then X
if 50, then L
if 100, then C
if 500, then D
if 1000, then M

if not...

if last digit entered is 1-3, then last roman numerals will be I, II, or III
- input: 313
- output: CCCXIII

if last digit entered is 4, then last roman numerals will be gIV
- input: 314
- output: CCCXIV

if last digit entered is 5, then last roman numeral will be V
- input: 315
- output: CCCXV

if last digit entered is 6-8, then last roman numerals will be VI, VII, VIII
- input: 316
- output: CCCXVI

if last digit entered is 9, then last roman numerals will be IX
- input: 319
- output: CCCXIX


if second to last digit is 0, then second to last roman numerals will be, then there is no "second to last" numerals
- input: 308
- output: CCCIV aka CCC () IV

if second to last digit is 1-3, then second to last roman numerals will be X, XX, XXX
- input: 311
- output: CCCXI

if second to last digit is 4, then second to last roman numerals will be XL
- input: 341
- output: CCCXLI

if second to last digit is 5, then second to last roman numbers will be L
- input: 353
- output: CCCLIII

if second to last digit is 6-8, then second to last roman numerals will be L + equivalent number of X's
- input: 373
- output: CCCLXXIII

if second to last digit is 9, then second to last roman numerals will be XC
- input: 393
- output: CCCXCIII


if third to last digit is 0, then there is no "third to last" numeral
- input: 1053
- output: MLII aka M () L II

if third to last digit is 1-3, then third to last roman numerals will be C, CC, or CCC
- input: 1253
- output: MCCLIII

if third to last digit is 4, then third to last roman numerals will be CD
- input: 1453
- output: MCDLII

if third to last digit is 5, then third to last roman numerals will be D
- input: 1553
- output: MDLIII

if third to last digit is 6-8, then third to last roman numerals will be D plus C, CC, or CCC
- input: 1658
- output: MDCLVIII

if third to last digit is 9, then third to last roman numerals will be CM
- input: 1958
- output: MCMLVIII

in any 4 digit number, then fourth to last roman numeral will be M
- input: 1444
- output: MCDXLIV

#Setup
Clone repository and open in browser

#Technologies Used
1. html
2. css
3. javascript
