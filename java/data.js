const arr1 = [
//basic

{
    "programName": "Write a Java program to print \"Hello World!\" on screen",
    "index": "b1",
    "type": "basic",
    "pnumber": "1",
    "code": "\npublic class program1 {\npublic static void main(String Args[]) {\nSystem.out.println(\"Hello World!\");\n}\n}",
    "output": "Hello, World!"
},
{
    "programName": "Write a Java program to print the sum of two numbers",
    "code": "\npublic class program2 {\npublic static void main(String Args[]) {\nint a = 5;\nint b = 8;\nSystem.out.println(\"Sum of two numbers  a : \" + a + \" + b : \" + b + \" = \" + (a+b));\n}\n}",
    "output": "Sum of two numbers  a : 5 + b : 8 = 13",
    "index": "b2",
    "type": "basic",
    "pnumber": "2",
},
{
    "programName": "Write a Java program that takes two numbers and display the product of two numbers",
    "code": "\npublic class program2 {\npublic static void main(String Args[]) {\nint a = 5;\nint b = 8;\nSystem.out.println(\"Sum of two numbers  a : \" + a + \" + b : \" + b + \" = \" + (a+b));\n}\n}",
    "output": "Enter the first number: 4\nEnter the second number: 8\nThe product of 4.0 and 8.0 is: 32.0",
    "index": "b3",
    "type": "basic",
    "pnumber": "3",
},
{
    "programName": "Write a Java program to print the sum, multiply, subtract, divide and remainder of two numbers",
    "code": "<span class='colorGreen'>// Write a Java program to print the sum, multiply, subtract, divide and remainder of two numbers</span>\npublic class program4 {\nimport java.util.Scanner;\npublic static void main(String Args[]) {\nScanner scanner = new Scanner(System.in);\nSystem.out.print(\"Enter the first number: \");\ndouble number1 = scanner.nextDouble();\nSystem.out.print(\"Enter the second number: \");\ndouble number2 = scanner.nextDouble();\nSystem.out.println(\"Sum of \" + number1 + \" and \" + number2 + \" : \" + (number1+number2));\nSystem.out.println(\"Subtract of \" + number1 + \" and \" + number2 + \" : \" + (number1-number2));\nSystem.out.println(\"Multiplication of \" + number1 + \" and \" + number2 + \" : \" + (number1*number2));\nSystem.out.println(\"Division of \" + number1 + \" and \" + number2 + \" : \" + (number1/number2));\nSystem.out.println(\"Remainder of \" + number1 + \" and \" + number2 + \" : \" + (number1%number2));\n}\n}",
    "index": "b4",
    "type": "basic",
    "pnumber": "4",
    "output": "Enter the first number: 3\nEnter the second number: 3\nSum of 3.0 and 3.0 : 6.0\n Subtract of 3.0 and 3.0 : 0.0\nMultiplication of 3.0 and 3.0 : 9.0\nDivision of 3.0 and 3.0 : 1.0\nRemainder of 3.0 and 3.0 : 0.0"
},
{
    "programName": "Write a Java program that takes five numbers as input to calculate and print the average of the numbers",
    "code": "<span class='colorGreen'>// Write a Java program that takes five numbers as input to calculate and print the average of the numbers</span>\npublic class program5 {\nimport java.util.Scanner;\npublic static void main(String Args[]) {\nScanner scanner = new Scanner(System.in);\nSystem.out.println(\"Enter five numbers to calculate their average : \\n\");\ndouble sum = 0;\nfor(int i=1;i<=5;i++) {\nSystem.out.println(\"Enter number \" + i + \" : \");\ndouble number = scanner.nextDouble();\nsum += number;\n}\ndouble average = sum / 5;\nSystem.out.println(\"The average of the five numbers is: \" + average);\nscanner.close();\n}\n}",
    "index": "b5",
    "type": "basic",
    "pnumber": "5",
    "output": "Enter the first number: 3\nEnter the second number: 3\nSum of 3.0 and 3.0 : 6.0\n Subtract of 3.0 and 3.0 : 0.0\nMultiplication of 3.0 and 3.0 : 9.0\nDivision of 3.0 and 3.0 : 1.0\nRemainder of 3.0 and 3.0 : 0.0"
},
{
    "programName": "Write a Java program to swap two variables",
    "code": "<span class='colorGreen'>// Write a Java program to swap two variables</span>\nimport java.util.Scanner;\n\npublic class program6{\n    public static void main(String Args[]){\n\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.println(\"Enter number1 : \");\n        int number1 = scanner.nextInt();\n\n        System.out.println(\"Enter number2 : \");\n        int number2 = scanner.nextInt();\n\n        number1 = number1+number2;   \n        number2 = number1-number2;  \n        number1 = number1-number2;\n\n        System.out.println(\"After swapping, the numbers are number1 = \" + number1 + \" and number2 = \" + number2);\n\n    }\n}\n",
    "index": "b6",
    "type": "basic",
    "pnumber": "6",

    "output": "Enter number1 : 4\nEnter number2 : 6\nAfter swapping, the numbers are number1 = 6 and number2 = 4\n"
},
{
    "programName": "Write a Java program to convert a decimal number to binary numbers",
    "code": "<span class='colorGreen'>// Write a Java program to convert a decimal number to binary numbers</span>\nimport java.util.Scanner;\n\npublic class program7 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter a decimal number: \");\n        double decimalNumber = scanner.nextDouble();\n\n        String binary = Double.toString(decimalNumber);\n        int decimalPointIndex = binary.indexOf(\".\");\n        \n        if (decimalPointIndex == -1) {\n            System.out.println(\"Binary representation: \" + toBinary(Integer.parseInt(binary)));\n        } else {\n            int integerPart = Integer.parseInt(binary.substring(0, decimalPointIndex));\n            double fractionalPart = Double.parseDouble(\"0.\" + binary.substring(decimalPointIndex + 1));\n\n            System.out.println(\"Binary representation: \" + toBinary(integerPart) + \".\" + toBinaryFractional(fractionalPart));\n        }\n\n        scanner.close();\n    }\n\n    public static String toBinary(int number) {\n        return Integer.toBinaryString(number);\n    }\n\n    public static String toBinaryFractional(double fractionalPart) {\n        StringBuilder binaryFractionalPart = new StringBuilder();\n        while (fractionalPart > 0.0) {\n            fractionalPart *= 2;\n            binaryFractionalPart.append((int) fractionalPart);\n            fractionalPart -= (int) fractionalPart;\n        }\n        return binaryFractionalPart.toString();\n    }\n}\n",
    "index": "b7",
    "type": "basic",
    "pnumber": "7",
    "output": "Enter a decimal number: 10\nBinary representation: 1010."
},
{
    "programName": "Write a Java program to convert a binary number to decimal number",
    "code": "<span class='colorGreen'>// Write a Java program to convert a binary number to decimal number</span>\nimport java.util.Scanner;\n\npublic class program8 {\n  public static void main(String[] args) {\n    \n    // binary number\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter a binary number: \");\n        String binary = scanner.nextLine();\n    \n    // convert to decimal\n    int decimal = Integer.parseInt(binary, 2);\n    System.out.println(binary + \" in binary = \" + decimal + \" in decimal.\");\n  }\n}",
    "index": "b8",
    "type": "basic",
    "pnumber": "8",
    "output": "Enter a binary number: 1101\n1101 in binary = 13 in decimal."
},
{
    "programName": "Write a Java program to check whether Java is installed on your computer or not",
    "code": "<span class='colorGreen'>// Write a Java program to check whether Java is installed on your computer or not</span>\npublic class program9 {\npublic static void main(String[] args) {\nString javaVersion = System.getProperty(\"java.version\");\n\nif (javaVersion != null) {\nSystem.out.println(\"Java is installed on your computer.\");\nSystem.out.println(\"Java version: \" + javaVersion);\n} else {\nSystem.out.println(\"Java is not installed on your computer.\");\n}\n}\nn",
    "index": "b9",
    "type": "basic",
    "pnumber": "9",
    "output": "Java is installed on your computer.\nJava version: 17.0.2 (depends on the version you installed)"
},
{
    "programName": "Write a Java program and compute the sum of the digits of an integer",
    "code": "<span class='colorGreen'>// Write a Java program and compute the sum of the digits of an integer</span>\nimport java.util.Scanner;\n\npublic class program10 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter an integer: \");\n        int number = scanner.nextInt();\n\n        int sum = computeSumOfDigits(number);\n\n        System.out.println(\"The sum of the digits is: \" + sum);\n\n        scanner.close();\n    }\n\n    public static int computeSumOfDigits(int number) {\n        int sum = 0;\n        \n        // Make sure the number is positive\n        number = Math.abs(number);\n\n        while (number > 0) {\n            int digit = number % 10;\n            sum += digit;\n            number /= 10;\n        }\n\n        return sum;\n    }\n}\n",
    "index": "b10",
    "type": "basic",
    "pnumber": "10",
    "output": "Enter an integer: 2564\nThe sum of the digits is: 17"
},
{
    "programName": "Write a Java program to compare two numbers",
    "index": "b11",
    "type": "basic",
    "pnumber": "11",
    "code": "<span class='colorGreen'>// Write a Java program to compare two numbers</span>\nimport java.util.Scanner;\n\npublic class program11 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the first number: \");\n        double number1 = scanner.nextDouble();\n\n        System.out.print(\"Enter the second number: \");\n        double number2 = scanner.nextDouble();\n\n        if (number1 > number2) {\n            System.out.println(number1 + \" is greater than \" + number2);\n        } else if (number1 < number2) {\n            System.out.println(number1 + \" is less than \" + number2);\n        } else {\n            System.out.println(number1 + \" is equal to \" + number2);\n        }\n\n        scanner.close();\n    }\n}\n",
    "output": "Enter the first number: 50\nEnter the second number: 40\n50.0 is greater than 40.0"
},
{
    "programName": "Write a Java program to count the letters, spaces, numbers and other characters of an input string",
    "code": "<span class='colorGreen'>// Write a Java program to count the letters, spaces, numbers and other characters of an input string</span>\nimport java.util.Scanner;\nn class program12 {\npublic static void main(String[] args) {\n\nSystem.out.println(\"Enter a string : \");\nn// user input =>\nScanner scanner = new Scanner(System.in);\nString input = scanner.nextLine();\nnnint letterCount = 0;\nint spaceCount = 0;\nint numberCount = 0;\nint otherCount = 0;\nnfor(char c : input.toCharArray()){\nif(Character.isLetter(c)){\nletterCount++;\n}\nelse if(Character.isWhitespace(c)){\nspaceCount++;\n}\nelse if(Character.isDigit(c)){\nnumberCount++;\n}\nelse{\notherCount++;\n}\n}\nnSystem.out.println(\"Letter Count : \" + letterCount);\nSystem.out.println(\"White space : \" + spaceCount);\nSystem.out.println(\"Number Count : \" + numberCount);\nSystem.out.println(\"Other Count : \" + otherCount);\nnscanner.close();\n}\n",
    "index": "b12",
    "type": "basic",
    "pnumber": "12",
    "output": "Enter a string : \n        aryan 123#\n        Letter Count : 5\n        White space : 1 \n        Number Count : 3\n        Other Count : 1 "
},
{
    "programName": "Write a Java program to print the ascii value of a given character",
    "code": "<span class='colorGreen'>// Write a Java program to print the ascii value of a given character</span>\nimport java.util.Scanner;\n\npublic class program13{\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter a character: \");\n        char character = scanner.next().charAt(0);\n\n        int asciiValue = (int) character;\n\n        System.out.println(\"ASCII value of \" + character + \" is: \" + asciiValue);\n\n        scanner.close();\n    }\n}\n",
    "index": "b13",
    "type": "basic",
    "pnumber": "13",
    "output": "Enter a character: d\nASCII value of d is: 100"
},
{
    "programName": "Write a Java program that accepts an integer (n) and computes the value of n+nn+nnn",
    "code": "<span class='colorGreen'>// Write a Java program that accepts an integer (n) and computes the value of n+nn+nnn</span>\nimport java.util.Scanner;\npublic class program14{\npublic static void main(String Args[]){\n    // input from user \n    System.out.println(\"Enter a number :\");\n    Scanner scanner = new Scanner(System.in);\n    int n = scanner.nextInt();\n\n    int nn = n*11;\n    int nnn = n * 111;\n    int result = n + nn + nnn;\n    System.out.println(\"The result (n+nn+nnn) : \" + result);\n}\n}\n",
    "index": "b14",
    "type": "basic",
    "pnumber": "14",
    "output": "Enter a number : 5\nThe result (n+nn+nnn) : 615"
},
{
    "programName": "Write a Java program to display the system time",
    "code": "<span class='colorGreen'>// Write a Java program to display the system time</span>\nimport java.time.LocalTime;\npublic class program15{\n    public static void main(String args[]){\n\n        LocalTime currentTime = LocalTime.now();\n        System.out.println(\"Current System time : \" + currentTime);\n    }\n}\n",
    "index": "b15",
    "type": "basic",
    "pnumber": "15",
    "output": "Current System time : 11:48:16.059681300 (depends on current time)"
},
{
    "programName": "Write a Java program to print the odd numbers from 1 to 20",
    "code": "\npublic class program16{\n    public static void main(String args[]){\n\n        System.out.println(\"Odd numbers from 1 to 20\");\n\n        for(int i=1;i<=20;i++){\n            if(i%2!=0){\n                System.out.println(i);\n            }\n        }\n    }\n}\n",
    "index": "b16",
    "type": "basic",
    "pnumber": "16",
    "output": "Odd numbers from 1 to 20<br>1<br>3<br>5<br>7<br>9<br>11<br>13<br>15<br>17<br>19<br>"
},
{
    "programName": "Write a Java program to print the even numbers from 1 to 20",
    "code": "\npublic class program17{\n    public static void main(String args[]){\n\n        System.out.println(\"Even numbers from 1 to 20\");\n\n        for(int i=1;i<=20;i++){\n            if(i%2==0){\n                System.out.println(i);\n            }\n        }\n    }\n}\n",
    "index": "b17",
    "type": "basic",
    "pnumber": "17",
    "output": "Even numbers from 1 to 20\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n"
},
{
    "programName": "Write a Java program to convert a string to an integer",
    "code": "\nimport java.util.Scanner;\n\n    public class program18{\n        public static void main(String args[]){\n\n            // user input\n            System.out.println(\"Enter a string for converting to integer : \");\n            Scanner scanner = new Scanner(System.in);\n            String userInput = scanner.nextLine();\n\n            try {\n                int number = Integer.parseInt(userInput);\n                System.out.println(\"The integer value is: \" + number);\n            } catch (NumberFormatException e) {\n                System.out.println(\"Invalid input. Please enter a valid number.\");\n            }\n\n            scanner.close();\n        }\n    }\n",
    "index": "b18",
    "type": "basic",
    "pnumber": "18",
    "output": "Enter a string for converting to integer : 12345<br>       The integer value is: 12345"
},
{
    "programName": "Write a Java program to convert seconds to hour, minute and seconds",
    "code": "\nimport java.util.Scanner;\n\npublic class program19 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter a number of seconds: \");\n        int totalSeconds = scanner.nextInt();\n\n        int hours = totalSeconds / 3600;  // 3600 seconds in an hour\n        int minutes = (totalSeconds % 3600) / 60;  // 60 seconds in a minute\n        int seconds = totalSeconds % 60;\n\n        System.out.println(\"Converted time: \" + hours + \" hours, \" + minutes + \" minutes, \" + seconds + \" \neconds\");\n        scanner.close();\n    }\n}\n",
    "index": "b19",
    "type": "basic",
    "pnumber": "19",
    "output": "Enter a number of seconds: 3605\nConverted time: 1 hours, 0 minutes, 5 seconds"
},
{
    "programName": "Write a Java program to compute the sum of the first 100 prime numbers",
    "code": "\npublic class program20 {\n    public static void main(String[] args) {\n        int count = 0; // Counter for prime numbers\n        int number = 2; // Start with the first prime number (2)\n        long sum = 0; // To store the sum of prime numbers\n\n        while (count < 100) {\n            if (isPrime(number)) {\n                sum += number;\n                count++;\n            }\n            number++;\n        }\n\n        System.out.println(\"The sum of the first 100 prime numbers is: \" + sum);\n    }\n\n    public static boolean isPrime(int n) {\n        if (n <= 1) {\n            return false;\n        }\n        if (n <= 3) {\n            return true;\n        }\n        if (n % 2 == 0 || n % 3 == 0) {\n            return false;\n        }\n        for (int i = 5; i * i <= n; i += 6) {\n            if (n % i == 0 || n % (i + 2) == 0) {\n                return false;\n            }\n        }\n        return true;\n    }\n}\n",
    "index": "b20",
    "type": "basic",
    "pnumber": "20",
    "output": "The sum of the first 100 prime numbers is: 24133"
},
{
    "programName": "Write a Java program to swap the first and last elements of an array and create a new array",
    "code": "<span class='colorGreen'>// Write a Java program to swap the first and last elements of an array and create a new array</span>\npublic class program21 {\n    public static void main(String[] args) {\n        int[] originalArray = {1, 2, 3, 4, 5};\n\n        if (originalArray.length >= 2) {\n            int[] newArray = new int[originalArray.length];\n            newArray[0] = originalArray[originalArray.length - 1];\n\n            for (int i = 1; i < originalArray.length - 1; i++) {\n                newArray[i] = originalArray[i];\n            }\n\n            newArray[originalArray.length - 1] = originalArray[0];\n\n            System.out.print(\"Original Array: \");\n            printArray(originalArray);\n\n            System.out.print(\"New Array with Swapped Elements: \");\n            printArray(newArray);\n        } else {\n            System.out.println(\"Array has less than two elements, no swap needed.\");\n        }\n    }\n\n    public static void printArray(int[] array) {\n        for (int value : array) {\n            System.out.print(value + \" \");\n        }\n        System.out.println();\n    }\n}\n",
    "index": "b21",
    "type": "basic",
    "pnumber": "21",
    "output": "Original Array: 1 2 3 4 5<br>New Array with Swapped Elements: 5 2 3 4 1"
},
{
    "programName": "Write a Java program to count the number of even and odd elements in a given array",
    "code": "\nimport java.util.Scanner;\n\npublic class program22{\n    public static void main(String args[]){\n\n        // taking the length from user\n        System.out.println(\"Enter the length of array : \");\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n\n        // taking array values from user\n        int[] arr = new int[n];\n        System.out.println(\"Enter the elements of the array, once at a time : \");\n\n        for(int i=0;i<n;i++){\n         System.out.print(\"Element \" + (i + 1) + \": \");\n            arr[i] = scanner.nextInt();\n        }\n        \n        scanner.close();\n\n        int oddNumCount = 0;\n        int evenNumCount = 0;\n\n        for(int num : arr){\n            if(num%2 == 0){\n                evenNumCount++;\n            }\n            else{\n                oddNumCount++;\n            }\n        }\n\n        System.out.println(\"\nNumber of odd numbers in this array are \" + oddNumCount + \" and even numbers \nre \" + evenNumCount);}\n}\n",
    "index": "b22",
    "type": "basic",
    "pnumber": "22",
    "output": "Enter the length of array : 4\nEnter the elements of the array, once at a time : \nElement 1: 6\nElement 2: 8\nElement 3: 5\nElement 4: 3\n\nNumber of odd numbers in this array are 2 and even numbers are 2\n"
},
{
    "programName": "Write a Java program to compute the square root of an given integer",
    "code": "\nimport java.util.Scanner;\n\npublic class program23{\n    public static void main(String args[]){\n\n        // user input =>\n        System.out.println(\"Enter a number to compute the square root of an given integer\");\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n\n        if(number<0){\n            System.out.println(\"Cannot calculate the square root of a negative number.\");\n        }\n        else{\n            System.out.println(Math.sqrt(number));\n        }\n    }\n}\n",
    "index": "b23",
    "type": "basic",
    "pnumber": "23",
    "output": "Enter a number to compute the square root of an given integer 16<br>4.0"
},
{
    "programName": "Write a Java program to check if a positive number is a palindrome or not",
    "code": "\nimport java.util.Scanner;\n\npublic class program24 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter a positive number: \");\n        int number = scanner.nextInt();\n\n        if (isPalindrome(number)) {\n            System.out.println(number + \" is a palindrome.\");\n        } else {\n            System.out.println(number + \" is not a palindrome.\");\n        }\n\n        scanner.close();\n    }\n\n    // Function to check if a number is a palindrome\n    public static boolean isPalindrome(int num) {\n        if (num < 0) {\n            return false; // Negative numbers are not palindromes\n        }\n\n        int originalNum = num;\n        int reversedNum = 0;\n\n        while (num > 0) {\n            int digit = num % 10;\n            reversedNum = reversedNum * 10 + digit;\n            num /= 10;\n        }\n\n        return originalNum == reversedNum;\n    }\n}\n",
    "index": "b24",
    "type": "basic",
    "pnumber": "24",
    "output": "Enter a positive number: 24542<br>24542 is a palindrome."
},
{
    "programName": "Write a Java program to add two numbers without using any arithmetic operators",
    "code": "<span class='colorGreen'>// Write a Java program to add two numbers without using any arithmetic operators</span>\nimport java.util.Scanner;\n\npublic class program25{\n public static void main(String[] args) {\n   \n    Scanner scanner = new Scanner(System.in);\n\n    System.out.println(\"Enter number1 : \");\n    int num1 = scanner.nextInt();\n    System.out.println(\"Enter number2 : \");\n    int num2 = scanner.nextInt();\n\n        int sum = addNumbers(num1, num2);\n\n        System.out.println(\"Sum of \" + num1 + \" and \" + num2 + \" is: \" + sum);\n    }\n\n    public static int addNumbers(int a, int b) {\n        while (b != 0) {\n            int carry = a & b; // Calculate the carry\n            a = a ^ b; // Add a and b without considering the carry\n            b = carry << 1; // Left-shift the carry to add to the next bit\n        }\n        return a;\n    }\n}\n",
    "index": "b25",
    "type": "basic",
    "pnumber": "25",
    "output": "Enter number1 : 4<br>        Enter number2 : 6<br>        Sum of 4 and 6 is: 10"
},
{
    "programName": " Write a Java program to add all the digits of a given positive integer",
    "code": "\nimport java.util.Scanner;\n\npublic class program26{\n     public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter a positive integer: \");\n        int number = scanner.nextInt();\n\n        int sum = sumOfDigits(number);\n\n        System.out.println(\"Sum of the digits: \" + sum);\n\n        scanner.close();\n    }\n\n    public static int sumOfDigits(int n) {\n        int sum = 0;\n\n        while (n > 0) {\n            int digit = n % 10; // Get the last digit\n            sum += digit; // Add the digit to the sum\n            n /= 10; // Remove the last digit\n        }\n\n        return sum;\n    }\n}\n",
    "index": "b26",
    "type": "basic",
    "pnumber": "26",
    "output": "Enter a positive integer: 12456<br>        Sum of the digits: 18"
},
{
    "programName": "Java program to find area of circle",
    "code": "\nimport java.util.Scanner;\n\npublic class program27 {\n    public static void main(String[] args) {\n        // Create a Scanner object to read user input\n        Scanner scanner = new Scanner(System.in);\n        \n        // Prompt the user to enter the radius of the circle\n        System.out.print(\"Enter the radius of the circle: \");\n        \n        // Read the radius from the user\n        double radius = scanner.nextDouble();\n        \n        // Calculate the area of the circle\n        double area = Math.PI * Math.pow(radius, 2);\n        \n        // Display the result\n        System.out.println(\"The area of the circle with radius \" + radius + \" is: \" + area);\n        \n        // Close the scanner\n        scanner.close();\n    }\n}\n",
    "index": "b27",
    "type": "basic",
    "pnumber": "27",
    "output": "Enter the radius of the circle: 5<br>The area of the circle with radius 5.0 is: 78.5398163397448"
},
{
    "programName": "Java Program to find area of rectangle",
    "code": "\nimport java.util.Scanner;\n\npublic class program28{\n    public static void main(String args[]){\n\n        Scanner scanner = new Scanner(System.in);\n        System.out.println(\"Enter length : \");\n        int length = scanner.nextInt();\n        System.out.println(\"Enter breadth : \");        \n        int breadth = scanner.nextInt();\n\n        System.out.println(\"Area of rectange whose length is \" + length + \" and breadth is \" + breadth + \" are \" + (length*breadth));\n    }\n}\n",
    "index": "b28",
    "type": "basic",
    "pnumber": "28",
    "output": "Enter length : 8<br>Enter breadth : 2<br>Area of rectange whose length is 8 and breadth is 2 are 16"
},
{
    "programName": "Java Program to find area of triangle",
    "code": "\n\nimport java.util.Scanner;\n\npublic class program29{\n    public static void main(String args[]){\n\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter base : \");\n        double base = scanner.nextDouble();\n        System.out.print(\"Enter height : \");\n        double height = scanner.nextDouble();\n        \n        double triangleArea = 0.5 * base * height;\n\n        System.out.println(\"Area of triangle : \" + triangleArea);\n\n    }\n}\n",
    "index": "b29",
    "type": "basic",
    "pnumber": "29",
    "output": "Enter base : 4<br>Enter height : 7<br>Area of triangle : 14.0"
},
{
    "programName": "Java Program to find area of equilateral triangle",
    "code": "<br>import java.util.Scanner;<br><br>public class program30 {<br>    public static void main(String[] args) {<br>        Scanner scanner = new Scanner(System.in);<br><br>        System.out.print(\"Enter the side length of the equilateral triangle: \");<br>        double side = scanner.nextDouble();<br><br>        double area = (Math.sqrt(3) / 4) * side * side;<br><br>        System.out.println(\"The area of the equilateral triangle with side length \" + side + \" is: \" + area);<br><br>        // Close the scanner<br>        scanner.close();<br>    }<br>}<br>",
    "index": "b30",
    "type": "basic",
    "pnumber": "30",
    "output": "Enter the side length of the equilateral triangle: 8<br>The area of the equilateral triangle with side length 8.0 is: 27.712812921102035"
},
{
    "programName": "Java Program to find area of rhombus",
    "code": "\nimport java.util.Scanner;\n\npublic class program31 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the length of the first diagonal: \");\n        double d1 = scanner.nextDouble();\n\n        System.out.print(\"Enter the length of the second diagonal: \");\n        double d2 = scanner.nextDouble();\n\n        double area = (d1 * d2) / 2;\n\n        System.out.println(\"The area of the rhombus with diagonals \" + d1 + \" and \" + d2 + \" is: \" + area);\n\n        scanner.close();\n    }\n}\n",
    "index": "b31",
    "type": "basic",
    "pnumber": "31",
    "output": "Enter the length of the first diagonal: 4\nEnter the length of the second diagonal: 9\nThe area of the rhombus with diagonals 4.0 and 9.0 is: 18.0"

},
{
    "programName": "Java Program to find area of parallelogram",
    "code": "\nimport java.util.Scanner;\n\npublic class program32{\n    public static void main(String args[]){\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter base : \");\n        double base = scanner.nextDouble();\n        System.out.print(\"Enter height : \");\n        double height = scanner.nextDouble();\n        \n        double parallelogrameArea = base * height;\n\n        System.out.println(\"Area of Parallelograme : \" + parallelogrameArea);\n    }\n}\n",
    "index": "b32",
    "type": "basic",
    "pnumber": "32",
    "output": "Enter base : 4\n        Enter height : 7\n        Area of Parallelograme : 28.0"
},



{
    "programName": "Java Program to find area of Prism",
    "code": "<span class='colorGreen'>// Java Program to find area of Prism</span>\nimport java.util.Scanner;\n\npublic class program33 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the length of the rectangular prism: \");\n        double length = scanner.nextDouble();\n        System.out.print(\"Enter the width of the rectangular prism: \");\n        double width = scanner.nextDouble();\n        System.out.print(\"Enter the height of the rectangular prism: \");\n        double height = scanner.nextDouble();\n\n        double surfaceArea = 2 * (length * width + width * height + height * length);\n        double volume = length * width * height;\n\n        System.out.println(\"The surface area of the rectangular prism is: \" + surfaceArea);\n        System.out.println(\"The volume of the rectangular prism is: \" + volume);\n\n        scanner.close();\n    }\n}\n",
    "index": "b33",
    "type": "basic",
    "pnumber": "33",
    "output": "Enter the length of the rectangular prism: 15\nEnter the width of the rectangular prism: 25\nEnter the height of the rectangular prism: 10\nThe surface area of the rectangular prism is: 1550.0\nThe volume of the rectangular prism is: 3750.0"
},


{
    "programName": "Java Program to find volume of sphere",
    "code": "<span class='colorGreen'>// Java Program to find volume of sphere</span>\nimport java.util.Scanner;\n\npublic class program34 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the radius of the sphere: \");\n        double radius = scanner.nextDouble();\n\n        double volume = (4.0 / 3.0) * Math.PI * Math.pow(radius, 3);\n\n        System.out.println(\"The volume of the sphere with radius \" + radius + \" is: \" + volume);\n\n        scanner.close();\n    }\n}\n",
    "index": "b34",
    "type": "basic",
    "pnumber": "34",
    "output": "Enter the radius of the sphere: 12\nThe volume of the sphere with radius 12.0 is: 7238.229473870882"
},
{
    "programName": "Java Program to find volume of cylinder",
    "code": "<span class='colorGreen'>// Java Program to find volume of cylinder</span>\nimport java.util.Scanner;\n\npublic class program35 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the radius of the cylinder: \");\n        double radius = scanner.nextDouble();\n\n        System.out.print(\"Enter the height of the cylinder: \");\n        double height = scanner.nextDouble();\n\n        double volume = Math.PI * Math.pow(radius, 2) * height;\n\n        System.out.println(\"The volume of the cylinder with radius \" + radius + \" and height \" + height + \" is: \" + volume);\n\n        scanner.close();\n    }\n}\n",
    "index": "b35",
    "type": "basic",
    "pnumber": "35",
    "output": "Enter the radius of the cylinder: 4\nEnter the height of the cylinder: 2\nThe volume of the cylinder with radius 4.0 and height 2.0 is: 100.53096491487338"
},
{
    "programName": "Java Program to find volume of cuboid",
    "code": "<span class='colorGreen'>// Java Program to find volume of cuboid</span>\nimport java.util.Scanner;\n\npublic class program36 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the length of the cuboid: \");\n        double length = scanner.nextDouble();\n        \n        System.out.print(\"Enter the width of the cuboid: \");\n        double width = scanner.nextDouble();\n        \n        System.out.print(\"Enter the height of the cuboid: \");\n        double height = scanner.nextDouble();\n\n        double volume = length * width * height;\n\n        System.out.println(\"The volume of the cuboid with length \" + length + \", width \" + width + \", and height \" + height + \" is: \" + volume);\n\n        scanner.close();\n    }\n}\n",
    "index": "b36",
    "type": "basic",
    "pnumber": "36",
    "output": "Enter the length of the cuboid: 8\n        Enter the width of the cuboid: 8\n        Enter the height of the cuboid: 8\n        The volume of the cuboid with length 8.0, width 8.0, and height 8.0 is: 512.0"
},
{
    "programName": "Java Program to find volume of cone",
    "code": "<span class='colorGreen'>// Java Program to find volume of cone</span>\nimport java.util.Scanner;\n\npublic class program37 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the radius of the cone: \");\n        double radius = scanner.nextDouble();\n\n        System.out.print(\"Enter the height of the cone: \");\n        double height = scanner.nextDouble();\n\n        double volume = (1.0 / 3.0) * Math.PI * Math.pow(radius, 2) * height;\n\n        System.out.println(\"The volume of the cone with radius \" + radius + \" and height \" + height + \" is: \" + volume);\n\n        scanner.close();\n    }\n}\n",
    "index": "b37",
    "type": "basic",
    "pnumber": "37",
    "output": "Enter the radius of the cone: 8]\n        Enter the height of the cone: 6]\n        The volume of the cone with radius 8.0 and height 6.0 is: 402.1238596594935"
},
{
    "programName": "Java program to find surface area of cuboid",
    "code": "<span class='colorGreen'>// Java program to find surface area of cuboid</span>\nimport java.util.Scanner;\n\npublic class program38 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the length of the cuboid: \");\n        double length = scanner.nextDouble();\n        \n        System.out.print(\"Enter the width of the cuboid: \");\n        double width = scanner.nextDouble();\n        \n        System.out.print(\"Enter the height of the cuboid: \");\n        double height = scanner.nextDouble();\n\n        double surfaceArea = 2 * (length * width + width * height + height * length);\n\n        System.out.println(\"The surface area of the cuboid with length \" + length + \", width \" + width + \", and height \" + height + \" is: \" + surfaceArea);\n\n        scanner.close();\n    }\n}\n",
    "index": "b38",
    "type": "basic",
    "pnumber": "38",
    "output": "Enter the length of the cuboid: 4\nEnter the width of the cuboid: 4\nEnter the height of the cuboid: 4\nThe surface area of the cuboid with length 4.0, width 4.0, and height 4.0 is: 96.0"
},
{
    "programName": "Java program to find surface area of cylinder",
    "code": "<span class='colorGreen'>// Java program to find surface area of cylinder</span>\nimport java.util.Scanner;\n\npublic class program39 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the radius of the cylinder: \");\n        double radius = scanner.nextDouble();\n\n        System.out.print(\"Enter the height of the cylinder: \");\n        double height = scanner.nextDouble();\n\n        double surfaceArea = 2 * Math.PI * Math.pow(radius, 2) + 2 * Math.PI * radius * height;\n\n        System.out.println(\"The surface area of the cylinder with radius \" + radius + \" and height \" + height + \" is: \" + surfaceArea);\n\n        scanner.close();\n    }\n}\n",
    "index": "b39",
    "type": "basic",
    "pnumber": "39",
    "output": "Enter the radius of the cylinder: 6\n        Enter the height of the cylinder: 4\n        The surface area of the cylinder with radius 6.0 and height 4.0 is: 376.99111843077515"
},
{
    "programName": "ava program to find surface area of cube",
    "code": "<span class='colorGreen'>// ava program to find surface area of cube</span>\nimport java.util.Scanner;\n\npublic class program40 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the length of a side of the cube: \");\n        double side = scanner.nextDouble();\n\n        double surfaceArea = 6 * Math.pow(side, 2);\n\n        System.out.println(\"The surface area of the cube with side length \" + side + \" is: \" + surfaceArea);\n\n        scanner.close();\n    }\n}\n",
    "index": "b40",
    "type": "basic",
    "pnumber": "40",
    "output": "Enter the length of a side of the cube: 6\nThe surface area of the cube with side length 6.0 is: 216.0"
},
{
    "programName": "Java program to calculate average marks",
    "code": "<span class='colorGreen'>// Java program to calculate average marks</span>\nimport java.util.Scanner;\n\npublic class program41 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the number of students: \");\n        int numberOfStudents = scanner.nextInt();\n\n        double[] scores = new double[numberOfStudents];\n\n        for (int i = 0; i < numberOfStudents; i++) {\n            System.out.print(\"Enter the score for student \" + (i + 1) + \": \");\n            scores[i] = scanner.nextDouble();\n        }\n\n        double sum = 0.0;\n        for (double score : scores) {\n            sum += score;\n        }\n        double average = sum / numberOfStudents;\n\n        System.out.println(\"The average marks of \" + numberOfStudents + \" students is: \" + average);\n\n        scanner.close();\n    }\n}\n",
    "index": "b41",
    "type": "basic",
    "pnumber": "41",
    "output": "Enter the number of students: 3\n        Enter the score for student 1: 56\n        Enter the score for student 2: 80\n        Enter the score for student 3: 94\n        The average marks of 3 students is: 76.66666666666667"
},
{
    "programName": "Java program to check vowel or consonant",
    "code": "<span class='colorGreen'>// Java program to check vowel or consonant</span>\nimport java.util.Scanner;\n\npublic class program42 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Prompt the user to enter a character\n        System.out.print(\"Enter a character: \");\n        char input = scanner.next().toLowerCase().charAt(0); // Convert the input to lowercase\n\n        // Check if the input is a letter\n        if ((input >= 'a' && input <= 'z')) {\n            // Check if the input is a vowel\n            if (input == 'a' || input == 'e' || input == 'i' || input == 'o' || input == 'u') {\n                System.out.println(input + \" is a vowel.\");\n            } else {\n                System.out.println(input + \" is a consonant.\");\n            }\n        } else {\n            System.out.println(\"This is not a valid letter.\");\n        }\n\n        scanner.close();\n    }\n}\n",
    "index": "b42",
    "type": "basic",
    "pnumber": "42",
    "output": "Enter a character: a\n        a is a vowel."
},
{
    "programName": "Java program to sum of N numbers",
    "code": "<span class='colorGreen'>// Java program to sum of N numbers</span>\nimport java.util.Scanner;\n\npublic class program43 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the number of values to sum (N): \");\n        int N = scanner.nextInt();\n\n        int sum = 0;\n\n        for (int i = 1; i <= N; i++) {\n            System.out.print(\"Enter number \" + i + \": \");\n            int number = scanner.nextInt();\n            sum += number;\n        }\n\n        System.out.println(\"The sum of \" + N + \" numbers is: \" + sum);\n\n        scanner.close();\n    }\n}\n",
    "index": "b43",
    "type": "basic",
    "pnumber": "43",
    "output": "Enter the number of values to sum (N): 4\n        Enter number 1: 4\n        Enter number 2: 6\n        Enter number 3: 8\n        Enter number 4: 1\n        The sum of 4 numbers is: 19"
},
{
    "programName": "Java program to find factorial of any number",
    "code": "<span class='colorGreen'>// Java program to find factorial of any number</span>\nimport java.util.Scanner;\n\npublic class program44{\n    public static void main(String args[]){\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter a number to calculate its factorial: \");\n        int number = scanner.nextInt();\n        long factorial = 1;\n        for (int i = 1; i <= number; i++) {\n            factorial *= i;\n        }\n        System.out.println(\"The factorial of \" + number + \" is: \" + factorial);\n        scanner.close();\n    }\n}\n",
    "index": "b44",
    "type": "basic",
    "pnumber": "44",
    "output": "Enter a number to calculate its factorial: 5\nThe factorial of 5 is: 120"
},
{
    "programName": "Java Program to calculate electricity bill",
    "code": "<span class='colorGreen'>// Java Program to calculate electricity bill</span>\nimport java.util.Scanner;\n\npublic class program45 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double ELECTRICITY_RATE = 0.12; // Electricity rate per kWh (you can adjust this as needed)\n\n        // enter the monthly consumption in kilowatt-hours (kWh)\n        System.out.print(\"Enter the monthly electricity consumption in kWh: \");\n        double consumption = scanner.nextDouble();\n\n        // Calculate the electricity bill\n        double billAmount = consumption * ELECTRICITY_RATE;\n        System.out.println(\"Your electricity bill for the month is: $\" + billAmount);\n        scanner.close();\n    }\n}\n",
    "index": "b45",
    "type": "basic",
    "pnumber": "45",
    "output": "Enter the monthly electricity consumption in kWh: 40\nYour electricity bill for the month is: $4.8"
},
{
    "programName": "Java Program To Calculate CGPA Percentage",
    "code": "<span class='colorGreen'>// Java Program To Calculate CGPA Percentage</span>\nimport java.util.Scanner;\n\npublic class program46 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // user to enter their CGPA and the maximum CGPA possible\n        System.out.print(\"Enter your CGPA: \");\n        double cgpa = scanner.nextDouble();\n        System.out.print(\"Enter the maximum CGPA possible: \");\n        double maxCgpa = scanner.nextDouble();\n\n        // Calculate the CGPA percentage\n        double cgpaPercentage = (cgpa / maxCgpa) * 100.0;\n\n        // Display the CGPA percentage\n        System.out.println(\"Your CGPA percentage is: \" + cgpaPercentage + \"%\");\n\n        // Close the scanner\n        scanner.close();\n    }\n}\n",
    "index": "b46",
    "type": "basic",
    "pnumber": "46",
    "output": "Enter your CGPA: 4.95\nEnter the maximum CGPA possible: 8\nYour CGPA percentage is: 61.875%"
},
{
    "programName": "Java Program to calculate compound interest",
    "code": "<span class='colorGreen'>// Java Program to calculate compound interest\n// formula : A = P(1 + r/n)^(nt) - P\n// Where:\n\n// A is the final amount after compound interest.\n// P is the principal amount (initial investment).\n// r is the annual interest rate (in decimal form).\n// n is the number of times the interest is compounded per year.\n// t is the number of years.</span>\nimport java.util.Scanner;\n\npublic class program47 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Prompt the user to enter the principal amount (initial investment)\n        System.out.print(\"Enter the principal amount (P): \");\n        double principal = scanner.nextDouble();\n\n        // Prompt the user to enter the annual interest rate (in decimal form)\n        System.out.print(\"Enter the annual interest rate (in decimal form): \");\n        double annualRate = scanner.nextDouble();\n\n        // Prompt the user to enter the number of times interest is compounded per year (n)\n        System.out.print(\"Enter the number of times interest is compounded per year (n): \");\n        int compoundFrequency = scanner.nextInt();\n\n        // Prompt the user to enter the number of years (t)\n        System.out.print(\"Enter the number of years (t): \");\n        int years = scanner.nextInt();\n\n        // Calculate the compound interest\n        double interest = principal * Math.pow(1 + (annualRate / compoundFrequency), compoundFrequency * years) \n principal;\n        // Display the calculated compound interest\n        System.out.println(\"The compound interest is: \" + interest);\n\n        // Close the scanner\n        scanner.close();\n    }\n}\n",
    "index": "b47",
    "type": "basic",
    "pnumber": "47",
    "output": "Enter the principal amount (P): 4\n        Enter the annual interest rate (in decimal form): 3\n        Enter the number of times interest is compounded per year (n): 6\n        Enter the number of years (t): 3\n        The compound interest is: 5907.567520141602"
},
{
    "programName": "Java Program To Calculate Batting Average",
    "code": "<span class='colorGreen'>// Java Program To Calculate Batting Average</span>\nimport java.util.Scanner;\n\npublic class program48{\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the total runs scored: \");\n        int runsScored = scanner.nextInt();\n\n        System.out.print(\"Enter the total innings played: \");\n        int inningsPlayed = scanner.nextInt();\n\n        // Calculate the batting average\n        double battingAverage = (double) runsScored / inningsPlayed;\n\n        System.out.println(\"The batting average is: \" + battingAverage);\n\n        scanner.close();\n}\n}",
    "index": "b48",
    "type": "basic",
    "output": "Enter the total runs scored: 60\n        Enter the total innings played: 15\n        The batting average is: 4.0"
},
{
    "programName": "Java Pogram to Calculate Commission Percentage",
    "code": "<span class='colorGreen'>// Java Pogram to Calculate Commission Percentage</span>\nimport java.util.Scanner;\n\npublic class program49 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Prompt the user to enter the total commission earned\n        System.out.print(\"Enter the total commission earned: \");\n        double totalCommission = scanner.nextDouble();\n\n        // Prompt the user to enter the total sales amount\n        System.out.print(\"Enter the total sales amount: \");\n        double totalSalesAmount = scanner.nextDouble();\n\n        // Calculate the commission percentage\n        double commissionPercentage = (totalCommission / totalSalesAmount) * 100;\n\n        // Display the commission percentage\n        System.out.println(\"The commission percentage is: \" + commissionPercentage + \"%\");\n\n        // Close the scanner\n        scanner.close();\n    }\n}\n",
    "index": "b49",
    "type": "basic",
    "output": "Enter the total commission earned: 40\n        Enter the total sales amount: 100\n        The commission percentage is: 40.0%"
},
{
    "programName": "Java Pogram To Find Distance Between Two Points",
    "code": "<span class='colorGreen'>// Java Pogram To Find Distance Between Two Points</span>\nimport java.util.Scanner;\n\npublic class program50 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Prompt the user to enter the coordinates of the first point\n        System.out.print(\"Enter the x-coordinate of the first point: \");\n        double x1 = scanner.nextDouble();\n        System.out.print(\"Enter the y-coordinate of the first point: \");\n        double y1 = scanner.nextDouble();\n\n        // Prompt the user to enter the coordinates of the second point\n        System.out.print(\"Enter the x-coordinate of the second point: \");\n        double x2 = scanner.nextDouble();\n        System.out.print(\"Enter the y-coordinate of the second point: \");\n        double y2 = scanner.nextDouble();\n\n        // Calculate the distance between the two points\n        double distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));\n\n        // Display the calculated distance\n        System.out.println(\"The distance between the two points is: \" + distance);\n\n        // Close the scanner\n        scanner.close();\n    }\n}\n",
    "index": "b50",
    "type": "basic",
    "output": "Enter the x-coordinate of the first point: 0.33\n        Enter the y-coordinate of the first point: 0.99\n        Enter the x-coordinate of the second point: 0.21\n        Enter the y-coordinate of the second point: 0.87\n        The distance between the two points is: 0.16970562748477142"
},
{
    "index": "b51",
    "type": "basic",
    "programName": "Java Program To Calculate Power Of Number",
    "code": "<span class='colorGreen'>// Java Program To Calculate Power Of Number</span>\nimport java.util.Scanner;\n\npublic class program51 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Prompt the user to enter the base number\n        System.out.print(\"Enter the base number: \");\n        double base = scanner.nextDouble();\n\n        // Prompt the user to enter the exponent\n        System.out.print(\"Enter the exponent: \");\n        double exponent = scanner.nextDouble();\n\n        // Calculate the power using Math.pow\n        double result = Math.pow(base, exponent);\n\n        // Display the calculated result\n        System.out.println(base + \" raised to the power of \" + exponent + \" is: \" + result);\n\n        // Close the scanner\n        scanner.close();\n    }\n}\n",
    "output": "Enter the base number: 8\n        Enter the exponent: 2\n        8.0 raised to the power of 2.0 is: 64.0"
},

{
    "type": "basic",
    "index": "b52",
    "programName": "Write a Java program to take three numbers from the user and print the greatest number",
    "code": "<span class='colorGreen'>// Write a Java program to take three numbers from the user and print the greatest number</span>\nimport java.util.Scanner;\n\npublic class program52 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the first number: \");\n        double number1 = scanner.nextDouble();\n        System.out.print(\"Enter the second number: \");\n        double number2 = scanner.nextDouble();\n        System.out.print(\"Enter the third number: \");\n        double number3 = scanner.nextDouble();\n\n        double greatestNumber = number1;\n\n        if (number2 > greatestNumber) {\n            greatestNumber = number2;\n        }\n\n        if (number3 > greatestNumber) {\n            greatestNumber = number3;\n        }\n\n        System.out.println(\"The greatest number is: \" + greatestNumber);\n\n        scanner.close();\n    }\n}\n",
    "output": "Enter the first number: 4\n        Enter the second number: 6\n        Enter the third number: 8\n        The greatest number is: 8.0"
},
{
    "type": "basic",
    "index": "b53",
    "programName": "Write a Java program to find the number of days in a month",
    "code": "<span class='colorGreen'>// Write a Java program to find the number of days in a month</span>\nimport java.util.Scanner;\n\npublic class program53{\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Prompt the user to enter the month and year\n        System.out.print(\"Enter a month (1-12): \");\n        int month = scanner.nextInt();\n        System.out.print(\"Enter a year: \");\n        int year = scanner.nextInt();\n\n        // Calculate the number of days in the specified month\n        int daysInMonth;\n\n        switch (month) {\n            case 4:\n            case 6:\n            case 9:\n            case 11:\n                daysInMonth = 30;\n                break;\n            case 2:\n                if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {\n                    daysInMonth = 29; // Leap year\n                } else {\n                    daysInMonth = 28; // Non-leap year\n                }\n                break;\n            default:\n                daysInMonth = 31;\n                break;\n        }\n\n        // Display the number of days in the specified month\n        System.out.println(\"There are \" + daysInMonth + \" days in the specified month.\");\n\n        // Close the scanner\n        scanner.close();\n    }\n}\n",
    "output": "Enter a month (1-12): 2\n        Enter a year: 2023\n        There are 28 days in the specified month."
},
{
    "type": "basic",
    "index": "b54",
    "programName": "Write a Java program to test a number is positive or negative",
    "code": "<span class='colorGreen'>// Write a Java program to test a number is positive or negative</span>\nimport java.util.Scanner;\n\npublic class program54{\n    public static void main(String args[]){\n\n        Scanner scanner = new Scanner(System.in);\n        System.out.println(\"Enter a number : \");\n        double num = scanner.nextDouble();\n\n        if(num>0){\n            System.out.println(\"Number is positive\");\n        }\n        else if(num==0){\n            System.out.println(\"Number is 0\");\n        }\n        else if(num<0){\n            System.out.println(\"Number is negative\");\n        }\n        else{\n            System.out.println(\"Enter a valid number\");\n        }\n    }\n}\n",
    "output": "Enter a number : \n12\nNumber is positive"
},
{
    "type": "basic",
    "index": "b55",
    "programName": "Write a Java Program to accept number of week's day (1-7) and print name of the day",
    "code": "<span class='colorGreen'>// Write a Java Program to accept number of week's day (1-7) and print name of the day</span>\nimport java.util.Scanner;\n\npublic class program55 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter a number (1-7) to get the day of the week: \");\n        int dayNumber = scanner.nextInt();\n\n        String dayName = getDayName(dayNumber);\n\n        if (dayName != null) {\n            System.out.println(\"The day of the week is: \" + dayName);\n        } else {\n            System.out.println(\"Invalid input. Please enter a number between 1 and 7.\");\n        }\n\n        scanner.close();\n    }\n\n    public static String getDayName(int dayNumber) {\n        switch (dayNumber) {\n            case 1:\n                return \"Sunday\";\n            case 2:\n                return \"Monday\";\n            case 3:\n                return \"Tuesday\";\n            case 4:\n                return \"Wednesday\";\n            case 5:\n                return \"Thursday\";\n            case 6:\n                return \"Friday\";\n            case 7:\n                return \"Saturday\";\n            default:\n                return null;\n        }\n    }\n}\n",
    "output": "Enter a number (1-7) to get the day of the week: 1\n        The day of the week is: Sunday"
},
{
    "type": "basic",
    "index": "b56",
    "programName": "Write a Java program that takes a year from user and print whether that year is a leap year or not",
    "code": "<span class='colorGreen'>// Write a Java program that takes a year from user and print whether that year is a leap year or not</span>\nimport java.util.Scanner;\n\npublic class program56 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter a year to check if it's a leap year: \");\n        int year = scanner.nextInt();\n\n        if (isLeapYear(year)) {\n            System.out.println(year + \" is a leap year.\");\n        } else {\n            System.out.println(year + \" is not a leap year.\");\n        }\n\n        scanner.close();\n    }\n\n    public static boolean isLeapYear(int year) {\n        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n}\n",
    "output": "Enter a year to check if it's a leap year: 2024\n        2024 is a leap year."
},
{
    "type": "basic",
    "index": "b57",
    "programName": "Write a Java program to input 5 numbers from keyboard and find their sum and average",
    "code": "<span class='colorGreen'>// Write a Java program to input 5 numbers from keyboard and find their sum and average</span>\nimport  java.util.Scanner;\n\npublic class program57{\n    public static void main(String args[]){\n\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.println(\"\n---------------------\");\n        System.out.println(\"Enter five numbers : \");\n        System.out.println(\"---------------------\n\");\n        double sum = 0;\n        for(int i=1;i<=5;i++){\n            System.out.print(\"Enter number \" + i + \" : \");\n\n            sum += scanner.nextDouble();\n        }\n        double average = sum / 5;\n\n        System.out.println(\"Sum of these numbers are :\" + sum + \" and average is \" + average + \"\n\");\n    }\n}\n",
    "output": "---------------------\nEnter five numbers : \n---------------------\n\nEnter number 1 : 4\nEnter number 2 : 6\nEnter number 3 : 8\nEnter number 4 : 3\nEnter number 5 : 2\nSum of these numbers are :23.0 and average is 4.6"
},
{
    "type": "basic",
    "index": "b58",
    "programName": "Write a program in Java to display the first 5 natural numbers",
    "code": "<span class='colorGreen'>// Write a program in Java to display the first 5 natural numbers</span>\npublic class program58 {\n    public static void main(String[] args) {\n        // Display the first 5 natural numbers\n        for (int i = 1; i <= 5; i++) {\n            System.out.println(i);\n        }\n    }\n}\n",
    "output": "1\n2\n3\n4\n5"
},
{
    "type": "basic",
    "index": "b59",
    "programName": "Java program to check vowel or consonant",
    "code": "<span class='colorGreen'>// Java program to check vowel or consonant</span>\nimport java.util.Scanner;\n\npublic class program42 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Prompt the user to enter a character\n        System.out.print(\"Enter a character: \");\n        char input = scanner.next().toLowerCase().charAt(0); // Convert the input to lowercase\n\n        // Check if the input is a letter\n        if ((input >= 'a' && input <= 'z')) {\n            // Check if the input is a vowel\n            if (input == 'a' || input == 'e' || input == 'i' || input == 'o' || input == 'u') {\n                System.out.println(input + \" is a vowel.\");\n            } else {\n                System.out.println(input + \" is a consonant.\");\n            }\n        } else {\n            System.out.println(\"This is not a valid letter.\");\n        }\n\n        scanner.close();\n    }\n}\n",
    "output": "Enter a character: e\n        e is a vowel."
},
{
    "type": "basic",
    "index": "b60",
    "programName": "Write a Java program to display the cube of the number upto given an integer",
    "code": "<span class='colorGreen'>// Write a Java program to display the cube of the number upto given an integer</span>\nimport java.util.Scanner;\n\npublic class program60 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter an integer: \");\n        int n = scanner.nextInt();\n\n        // Display the cubes of numbers up to n\n        for (int i = 1; i <= n; i++) {\n            int cube = i * i * i;\n            System.out.println(\"Cube of \" + i + \" is \" + cube);\n        }\n\n        scanner.close();\n    }\n}\n",
    "output": "Enter an integer: 3\n        Cube of 1 is 1\n        Cube of 2 is 8\n        Cube of 3 is 27"
},
{
    "type": "basic",
    "index": "b61",
    "programName": "Write a Java program to display the n terms of odd natural number and their sum",
    "code": "<span class='colorGreen'>// Write a Java program to display the n terms of odd natural number and their sum</span>\nimport java.util.Scanner;\n\npublic class program61 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.println(\"\n-----------\n\");         \n        System.out.print(\"Enter the number of terms (n): \");\n        int n = scanner.nextInt();\n\n        int sum = 0;\n        System.out.print(\"The first \" + n + \" odd natural numbers are: \");\n        for (int i = 1, count = 0; count < n; i += 2, count++) {\n            System.out.print(i + \" \");\n            sum += i;\n        }\n        System.out.println(\"\nSum of the first \" + n + \" odd natural numbers is: \" + sum);\n        System.out.println(\"\n-----------\n\");                      \n        scanner.close();\n    }\n}\n\n",
    "output": "-----------\nnEnter the number of terms (n): 4\nThe first 4 odd natural numbers are: 1 3 5 7 \nSum of the first 4 odd natural numbers is: 16\n\n-----------"
},
{
    "type": "basic",
    "index": "b62",
    "programName": "Write a Java program to display the multiplication table of a given integer",
    "code": "<span class='colorGreen'>// Write a Java program to display the multiplication table of a given integer</span>\nimport java.util.Scanner;\n\npublic class program62{\n    public static void main(String args[]){\n\n        Scanner scanner = new Scanner(System.in);\n        \n        System.out.print(\"Enter the number of rows : \");\n        int nRows = scanner.nextInt();\n\n        System.out.print(\"Enter the number to display table : \");\n        int num = scanner.nextInt();\n\n        for(int i = 1; i<= nRows; i++){\n            System.out.println(num + \" x \" +  i + \" = \" + (i*num));\n        }\n\n    }\n}\n",
    "output": "Enter the number of rows : 5\nEnter the number to display table : 4\n4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12\n4 x 4 = 16\n4 x 5 = 20"
},
{
    "type": "basic",
    "index": "b63",
    "programName": "Write a Java program that reads an integer and check whether it is negative, zero, or positive",
    "code": "<span class='colorGreen'>// Write a Java program that reads an integer and check whether it is negative, zero, or positive</span>\nimport java.util.Scanner;\n\npublic class program63 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the integer: \");\n        double number = scanner.nextDouble();\n\n\n\n        if (number > 0) {\n            System.out.println(\"Greater than 0\");\n        } else if (number < 0) {\n            System.out.println(\"Less than 0\");\n        } else {\n            System.out.println(\"Number is zero\");\n        }\n\n        scanner.close();\n    }\n}\n",
    "output": "Enter the integer: -201\nLess than 0"
},
{
    "type": "basic",
    "index": "b64",
    "programName": "Write a Java program that reads an positive integer and count the number of digits",
    "code": "<span class='colorGreen'>// Write a Java program that reads an positive integer and count the number of digits</span>\nimport java.util.Scanner;\n\npublic class program64 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter a positive integer: \");\n        long number = scanner.nextLong();\n\n        if (number < 0) {\n            System.out.println(\"Please enter a positive integer.\");\n        } else {\n            int digitCount = countDigits(number);\n            System.out.println(\"Number of digits in \" + number + \" is: \" + digitCount);\n        }\n\n        scanner.close();\n    }\n\n    public static int countDigits(long number) {\n        // Convert the number to a string and then count the characters (digits).\n        String numberStr = Long.toString(number);\n        return numberStr.length();\n    }\n}\n",
    "output": "nter a positive integer: 12697\nNumber of digits in 12697 is: 5"
},
{
    "type": "basic",
    "index": "b65",
    "programName": "Write a Java program that accepts three numbers and check All numbers are equal or not",
    "code": "<span class='colorGreen'>// Write a Java program that accepts three numbers and check All numbers are equal or not</span>\nimport java.util.Scanner;\n\npublic class program65{\n    public static void main(String args[]){\n\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter number 1 : \");\n        int num1 = scanner.nextInt();\n        System.out.print(\"Enter number 2 : \");\n        int num2 = scanner.nextInt();\n        System.out.print(\"Enter number 3 : \");\n        int num3 = scanner.nextInt(); \n\n        if(num1 == num2 && num1 == num3){\n            System.out.println(\"All numbers are equal\");\n        }\n        else{\n            System.out.println(\"\nNumbers are not equal\");\n        }\n        scanner.close();\n    }\n}",
    "output": "Enter number 1 : 12\nEnter number 2 : 40\nEnter number 3 : 57\n\nNumbers are not equal"
},
{

    "type": "basic",
    "index": "b66",
    "programName": "Write a java program that accepts three numbers from the user and check if numbers are in \"increasing\" or \"decreasing\" order.",
    "code": "<span class='colorGreen'>// Write a java program that accepts three numbers from the user and check if numbers are in \"increasing\" or \"decreasing\" order.</span>\nimport java.util.Scanner;\n\npublic class program66{\npublic static void main(String args[]){\n     Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter number 1 : \");\n        int num1 = scanner.nextInt();\n        System.out.print(\"Enter number 2 : \");\n        int num2 = scanner.nextInt();\n        System.out.print(\"Enter number 3 : \");\n        int num3 = scanner.nextInt(); \n\n        if(num1<num2 && num2<num3){\n            System.out.println(\"\nIncreasing order\n\");\n        }\n        else if(num2>num3 && num1>num2){\n            System.out.println(\"\nDecreasing order\n\");\n        }\n        else{\n            System.out.println(\"T\nhe numbers are in neither increasing nor decreasing order.\n\");\n        }\n\n}\n}",
    "output": "Enter number 1 : 12\nEnter number 2 : 41\nEnter number 3 : 90\n\nIncreasing order"
},
{
    "type": "basic",
    "index": "b67",
    "programName": "Write a Java program that determines a student's grade",
    "code": "<span class='colorGreen'>// Write a Java program that determines a student's grade</span>\nimport java.util.Scanner;\n\npublic class program67 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the student's score: \");\n        double score = scanner.nextDouble();\n\n        char grade;\n\n        if (score >= 0 && score <= 100) {\n            int scoreAsInt = (int) score; // Convert to an integer for the switch statement\n            switch (scoreAsInt / 10) {\n                case 10:\n                case 9:\n                    grade = 'A';\n                    break;\n                case 8:\n                    grade = 'B';\n                    break;\n                case 7:\n                    grade = 'C';\n                    break;\n                case 6:\n                    grade = 'D';\n                    break;\n                default:\n                    grade = 'F';\n                    break;\n            }\n        } else {\n            grade = 'X'; // 'X' represents an invalid score\n        }\n\n        System.out.println(\"The student's grade is: \" + grade);\n\n        scanner.close();\n    }\n}\n",
    "output": "Enter the student's score: 96\nThe student's grade is: A"
},
{

    "type": "basic",
    "index": "b68",
    "programName": "Write a Java program to create a simple calculator",
    "code": "<span class='colorGreen'>// Write a Java program to create a simple calculator</span>\nimport java.util.Scanner;\n\npublic class program68 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.println(\"Simple Calculator\");\n        System.out.println(\"Available operations:\");\n        System.out.println(\"1. Addition (+)\");\n        System.out.println(\"2. Subtraction (-)\");\n        System.out.println(\"3. Multiplication (*)\");\n        System.out.println(\"4. Division (/)\");\n        System.out.println(\"5. Division (/)\");\n\n        System.out.print(\"Choose an operation (1/2/3/4): \");\n        int choice = scanner.nextInt();\n\n        System.out.print(\"Enter the first number: \");\n        double num1 = scanner.nextDouble();\n\n        System.out.print(\"Enter the second number: \");\n        double num2 = scanner.nextDouble();\n\n        double result;\n\n        switch (choice) {\n            case 1:\n                result = num1 + num2;\n                System.out.println(\"Result: \" + result);\n                break;\n            case 2:\n                result = num1 - num2;\n                System.out.println(\"Result: \" + result);\n                break;\n            case 3:\n                result = num1 * num2;\n                System.out.println(\"Result: \" + result);\n                break;\n            case 4:\n                if (num2 != 0) {\n                    result = num1 / num2;\n                    System.out.println(\"Result: \" + result);\n                } else {\n                    System.out.println(\"Error: Division by zero is not allowed.\");\n                }\n                break;\n            default:\n                System.out.println(\"Invalid operation choice.\");\n        }\n\n        scanner.close();\n    }\n}\n",
    "output": "Simple Calculator\n        Available operations:\n        1. Addition (+)\n        2. Subtraction (-)\n        3. Multiplication (*)\n        4. Division (/)\n        5. Division (/)\n        Choose an operation (1/2/3/4): 1\n        Enter the first number: 4\n        Enter the second number: 6\n        Result: 10.0"
},
{
    "type": "basic",
    "index": "b69",
    "programName": "Write a Java program to concatenate two string",
    "code": "<span class='colorGreen'>// Write a Java program to concatenate two string</span>\nimport java.util.Scanner;\n\npublic class program69 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the first string: \");\n        String str1 = scanner.nextLine();\n\n        System.out.print(\"Enter the second string: \");\n        String str2 = scanner.nextLine();\n\n        // Using the + operator for string concatenation\n        String concatenatedString = str1 + str2;\n        System.out.println(\"Concatenated string (using + operator): \" + concatenatedString);\n\n        // Using the concat method for string concatenation\n        String concatenatedString2 = str1.concat(str2);\n        System.out.println(\"Concatenated string (using concat method): \" + concatenatedString2);\n\n        scanner.close();\n    }\n}\n",
    "output": "Enter the first string: hello\n        Enter the second string: coding\n        Concatenated string (using + operator): hellocoding\n        Concatenated string (using concat method): hellocoding"
},
{

    "type": "basic",
    "index": "b70",
    "programName": "Write a Java program to convert all characters in a string to lowercase",
    "code": "<span class='colorGreen'>// Write a Java program to convert all characters in a string to lowercase</span>\nimport java.util.Scanner;npublic class program70{n    public static void main(String args[]){nn        Scanner scanner = new Scanner(System.in);n        System.out.println(\"Enter a string to convert into Lowercase : \");n        String string = scanner.nextLine();n        System.out.println(\"\nResult : \" + string.toLowerCase());nn    }n}n",
    "output": "Enter a string to convert into Lowercase : \nARYAN\n\nResult : aryan"
},
{

    "type": "basic",
    "index": "b71",
    "programName": "Write a Java program to convert all characters in a string to uppercase",
    "code": "<span class='colorGreen'>// Write a Java program to convert all characters in a string to uppercase</span>\nimport java.util.Scanner;\npublic class program71{\n    public static void main(String args[]){\n\n        Scanner scanner = new Scanner(System.in);\n        System.out.println(\"Enter a string to convert into Uppercase : \");\n        String string = scanner.nextLine();\n        System.out.println(\"\nResult : \" + string.toUpperCase());\n\n    }\n}\n",
    "output": "Enter a string to convert into Uppercase : \nhappy coding\n\nResult : HAPPY CODING"
},
{

    "type": "basic",
    "index": "b72",
    "programName": "Write a Java program to trim a string(remove whitespaces)",
    "code": "<span class='colorGreen'>// Write a Java program to trim a string(remove whitespaces)</span>\n",
    "output": "Enter a string with leading and trailing whitespaces:  hello there run it \n        Original string: \" hello there run it \"\n        Trimmed string: \"hello there run it\""
},
{

    "type": "basic",
    "index": "b73",
    "programName": "Write a Java program to replace all the 'd' characters with 'f' characters",
    "code": "<span class='colorGreen'>// Write a Java program to replace all the 'd' characters with 'f' characters</span>\nimport java.util.Scanner;\n\npublic class program74 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Get the input string from the user\n        System.out.print(\"Enter a string: \");\n        String inputString = scanner.nextLine();\n\n        // Replace 'd' with 'f' and display the result\n        String resultString = replaceCharacters(inputString);\n        System.out.println(\"Result after replacement: \" + resultString);\n\n        scanner.close();\n    }\n\n    private static String replaceCharacters(String inputString) {\n        // Use the replace() method to replace 'd' with 'f'\n        return inputString.replace('d', 'f');\n    }\n}\n",
    "output": "Enter a string: donkey\n        Result after replacement: fonkey"
},
{

    "type": "basic",
    "index": "b74",
    "programName": "Write a Java program to get a substring of a given string between two specified positions",
    "code": "<span class='colorGreen'>// Write a Java program to get a substring of a given string between two specified positions</span>\nimport java.util.Scanner;\n\npublic class program73 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Get the input string from the user\n        System.out.print(\"Enter a string: \");\n        String inputString = scanner.nextLine();\n\n        // Get the start position from the user\n        System.out.print(\"Enter the start position: \");\n        int startPosition = scanner.nextInt();\n\n        // Get the end position from the user\n        System.out.print(\"Enter the end position: \");\n        int endPosition = scanner.nextInt();\n\n        // Check if positions are valid\n        if (startPosition >= 0 && startPosition < inputString.length() &&\n            endPosition >= 0 && endPosition <= inputString.length() && startPosition <= endPosition) {\n            // Get and display the substring\n            String resultSubstring = getSubstring(inputString, startPosition, endPosition);\n            System.out.println(\"Resulting Substring: \" + resultSubstring);\n        } else {\n            System.out.println(\"Invalid positions. Please enter valid start and end positions.\");\n        }\n\n        scanner.close();\n    }\n\n    private static String getSubstring(String inputString, int startPosition, int endPosition) {\n        // Use the substring() method to extract the substring\n        return inputString.substring(startPosition, endPosition);\n    }\n}\n",
    "output": "Enter a string: hello coding\n        Enter the start position: 6\n        Enter the end position: 12\n        Resulting Substring: coding"
},
{

    "type": "basic",
    "index": "b75",
    "programName": "Write a java program to get the length of a given string",
    "code": "<span class='colorGreen'>// Write a java program to get the length of a given string</span>\nimport java.util.Scanner;\n\npublic class program75 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Get the input string from the user\n        System.out.print(\"Enter a string: \");\n        String inputString = scanner.nextLine();\n        System.out.println(\"Length of the string: \" + inputString.length());\n\n        scanner.close();\n    }\n}",
    "output": "Enter a string: fix code\nLength of the string: 8"
},
{
    "type": "basic",
    "index": "b76",
    "programName": "Write a java program to print current date and time in the specified format",
    "code": "<span class='colorGreen'>// Write a java program to print current date and time in the specified format</span>\nimport java.time.LocalDateTime;\nimport java.time.format.DateTimeFormatter;\n\npublic class program76 {\n    public static void main(String[] args) {\n        // Get the current date and time\n        LocalDateTime currentDateTime = LocalDateTime.now();\n\n        // Define the desired format\n        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(\"yyyy-MM-dd HH:mm:ss\");\n\n        // Format and display the current date and time\n        String formattedDateTime = currentDateTime.format(formatter);\n        System.out.println(\"Current Date and Time: \" + formattedDateTime);\n    }\n}\n",
    "output": "Current Date and Time: 2023-11-15 19:34:26 (depends on current time and date)"
},
{

    "type": "basic",
    "index": "b77",
    "programName": "Write a Java program to get the character at the given index within the String",
    "code": "<span class='colorGreen'>// Write a Java program to get the character at the given index within the String</span>\nimport java.util.Scanner;\npublic class program77{\n    public static void main(String args[]){\n\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"\nEnter a string : \");\n        String inputString = scanner.nextLine();\n\n        System.out.print(\"\nEnter the index get the character within the String: \");\n        int charIndex = scanner.nextInt();\n\n        System.out.println(\"\nThe character at this index are : \" + inputString.charAt(charIndex) + \"\n\");\n\n    }\n}\n",
    "output": "Enter a string : apple\nEnter the index get the character within the String: 2\nThe character at this index are : p"
},
{
    "type": "basic",
    "index": "b78",
    "programName": "Write a java program to remove a particular character from a string",
    "code": "<span class='colorGreen'>// Write a java program to remove a particular character from a string</span>\nimport java.util.Scanner;\n\npublic class program78 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Get the input string from the user\n        System.out.print(\"Enter a string: \");\n        String inputString = scanner.nextLine();\n\n        // Get the character to be removed from the user\n        System.out.print(\"Enter the character to remove: \");\n        char charToRemove = scanner.next().charAt(0);\n\n        // Remove the character and display the result\n        String resultString = inputString.replace(String.valueOf(charToRemove), \"\");;\n        System.out.println(\"Result after removing '\" + charToRemove + \"': \" + resultString);\n\n        scanner.close();\n    }\n}\n",
    "output": "Enter a string: aryan\n        Enter the character to remove: a\n        Result after removing 'a': ryn"
},
{
    "type": "basic",
    "index": "b79",
    "programName": "Write a java program to reverse a String",
    "code": "<span class='colorGreen'>// Write a java program to reverse a String</span>\nimport java.util.Scanner;\n\npublic class program79{\n    public static void main(String args[]){\n\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"\nEnter a string : \");\n        String inputString = scanner.nextLine();\n\n        String reverseString = new StringBuilder(inputString).reverse().toString();\n\n        System.out.println(\"\n----------------------\n\");\n        System.out.println(\"Reverse string is : \" + reverseString);\n        System.out.println(\"\n----------------------\n\");\n    }\n}\n",
    "output": "\nEnter a string : aryan\n\n----------------------\n\nReverse string is : nayra\n\n----------------------"
},
{
    "type": "basic",
    "index": "b80",
    "programName": "Write a java program to remove html tags from a string",
    "code": "<span class='colorGreen'>// Write a java program to remove html tags from a string</span>\nimport java.util.Scanner;\nimport java.util.regex.Pattern;\n\npublic class program80 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Get the HTML string from the user\n        System.out.print(\"Enter an HTML string: \");\n        String htmlString = scanner.nextLine();\n\n        // Remove HTML tags and display the result\n        String plainText = htmlString.replaceAll(\"<[^>]*>\", \"\");\n        System.out.println(\"String without HTML tags: \" + plainText);\n\n        scanner.close();\n    }\n}\n",
    "output": "Enter an HTML string: &lt;p&gt;hello there &lt;/p&gt; String without HTML tags: hello there"
},
{
    "type": "basic",
    "index": "b81",
    "programName": "Write a java program to count total number of lines from a string",
    "code": "<span class='colorGreen'>// Write a java program to count total number of lines from a string</span>\nimport java.util.Scanner;\n\npublic class program81 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Get the input string from the user\n        System.out.println(\"Enter a string (press Enter twice to finish):\");\n\n        StringBuilder inputStringBuilder = new StringBuilder();\n        String line;\n        while (scanner.hasNextLine() && !(line = scanner.nextLine()).isEmpty()) {\n            inputStringBuilder.append(line).append(System.lineSeparator());\n        }\n\n        // Count the number of lines and display the result\n        int lineCount = countLines(inputStringBuilder.toString());\n        System.out.println(\"Total number of lines: \" + lineCount);\n\n        scanner.close();\n    }\n\n    private static int countLines(String inputString) {\n        // Split the string by newline characters and count the resulting array length\n        return inputString.split(System.lineSeparator()).length;\n    }\n}",
    "output": "Enter a string (press Enter twice to finish):\nhello\nthere\nthis is text\n\nTotal number of lines: 3"
},
{
    "type": "basic",
    "index": "b82",
    "programName": "Write a Java program to sum values of an array",
    "code": "<span class='colorGreen'>// Write a Java program to sum values of an array</span>\nimport java.util.Scanner;\n\npublic class program82{\n    public static void main(String args[]){\n\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter the number of elements array have : \");\n        int n = scanner.nextInt();\n\n         int[] array = new int[n];\n\n        int sum = 0;\n\n        for(int i=0;i<n;i++){\n            System.out.print(\"Enter element \" + i + \" : \");\n            array[i] = scanner.nextInt();\n            sum += array[i];\n        }\n\n        System.out.println(\"\nSum values of this array : \" + sum);\n    }\n}",
    "output": "Enter the number of elements array have : 4\n        Enter element 0 : 2\n        Enter element 1 : 4\n        Enter element 2 : 6\n        Enter element 3 : 8\n        \n        Sum values of this array : 20"
},
{
    "type": "basic",
    "index": "b83",
    "programName": "Write a Java program to find the index of an array element",
    "code": "<span class='colorGreen'>// Write a Java program to find the index of an array element</span>\nimport java.util.Scanner;\n\npublic class program83 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Get the size of the array from the user\n        System.out.print(\"Enter the size of the array: \");\n        int size = scanner.nextInt();\n\n        // Create and populate the array\n        int[] array = new int[size];\n        for (int i = 0; i < size; i++) {\n            System.out.print(\"Enter element \" + i + \": \");\n            array[i] = scanner.nextInt();\n        }\n\n        // Get the element to find from the user\n        System.out.print(\"Enter the element to find: \");\n        int elementToFind = scanner.nextInt();\n\n        // Find the index of the element using a loop\n        int index = -1;\n        for (int i = 0; i < size; i++) {\n            if (array[i] == elementToFind) {\n                index = i;\n                break; // Stop searching once the element is found\n            }\n        }\n\n        // Display the result\n        if (index != -1) {\n            System.out.println(\"\nIndex of element [\" + elementToFind + \"] is : \" + index);\n        } else {\n            System.out.println(\"\nElement not found in the array.\");\n        }\n\n        scanner.close();\n    }\n}\n",
    "output": "Enter the size of the array: 4\n        Enter element 0: 2\n        Enter element 1: 6\n        Enter element 2: 0\n        Enter element 3: 4\n        Enter the element to find: 6\n        Index of element [6] is : 1"
},
{
    "type": "basic",
    "index": "b84",
    "programName": "Write a Java program to calculate the average value of array elements",
    "code": "<span class='colorGreen'>// Write a Java program to calculate the average value of array elements</span>\nimport java.util.Scanner;\n\npublic class program84 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Get the size of the array from the user\n        System.out.print(\"Enter the size of the array: \");\n        int size = scanner.nextInt();\n\n        // Create and populate the array\n        int[] array = new int[size];\n        for (int i = 0; i < size; i++) {\n            System.out.print(\"Enter element \" + i + \": \");\n            array[i] = scanner.nextInt();\n        }\n\n        // Calculate the average of array elements\n        double average = calculateAverage(array);\n\n        // Display the result\n        System.out.println(\"Average value of array elements: \" + average);\n\n        scanner.close();\n    }\n\n    private static double calculateAverage(int[] array) {\n        // Calculate the sum of array elements\n        int sum = 0;\n        for (int element : array) {\n            sum += element;\n        }\n\n        // Calculate the average\n        return (double) sum / array.length;\n    }\n}\n",
    "output": "Enter the size of the array: 4\n        Enter element 0: 4\n        Enter element 1: 6\n        Enter element 2: 8\n        Enter element 3: 2\n        Average value of array elements: 5.0"
},
{
    "type": "basic",
    "index": "b85",
    "programName": "Write a Java program to test if an array contains a specific value",
    "code": "<span class='colorGreen'>// Write a Java program to test if an array contains a specific value</span>\nimport java.util.Scanner;\npublic class program85 {\n\n    public static boolean containsValue(int[] array, int targetValue) {\n        for (int element : array) {\n            if (element == targetValue) {\n                return true;\n            }\n        }\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int[] myArray = {1, 2, 3, 4, 5};\n\n       System.out.print(\"Array: [\");\n        for (int i = 0; i < myArray.length; i++) {\n            System.out.print(myArray[i]);\n            if (i < myArray.length - 1) {\n                System.out.print(\", \");\n            }\n        }\n        System.out.println(\"]\");\n\n        System.out.print(\"Which value you want to search : \");\n        int targetValue = scanner.nextInt();\n\n        if (containsValue(myArray, targetValue)) {\n            System.out.println(\"The array contains the value \" + targetValue);\n        } else {\n            System.out.println(\"The array does not contain the value \" + targetValue);\n        }\n    }\n}\n",
    "output": "Array: [1, 2, 3, 4, 5]\n        Which value you want to search : 3\n        The array contains the value 3"
},
{
    "type": "basic",
    "index": "b86",
    "programName": "Write a Java program to find the maximum and minimum value of an array",
    "code": "<span class='colorGreen'>// Write a Java program to find the maximum and minimum value of an array</span>\npublic class program86 {\n\n    public static void findMinMax(int[] array) {\n        if (array == null || array.length == 0) {\n            System.out.println(\"Array is empty or null.\");\n            return;\n        }\n\n        int min = array[0];\n        int max = array[0];\n\n        for (int i = 1; i < array.length; i++) {\n            if (array[i] < min) {\n                min = array[i];\n            } else if (array[i] > max) {\n                max = array[i];\n            }\n        }\n\n        System.out.println(\"Minimum value: \" + min);\n        System.out.println(\"Maximum value: \" + max);\n    }\n\n    public static void main(String[] args) {\n        int[] myArray = {5, 2, 8, 1, 6, 4};\nSystem.out.print(\"Array: [\");\n        for (int i = 0; i < myArray.length; i++) {\n            System.out.print(myArray[i]);\n            if (i < myArray.length - 1) {\n                System.out.print(\", \");\n            }\n        }\n        System.out.println(\"]\");\n        // Call the method to find min and max values\n        findMinMax(myArray);\n    }\n}\n",
    "output": "Array: [5, 2, 8, 1, 6, 4]\n        Minimum value: 1\n        Maximum value: 8"
},
{
    "type": "basic",
    "index": "b87",
    "programName": "Write a Java program to insert an element (specific position) into an array",
    "code": "<span class='colorGreen'>// Write a Java program to insert an element (specific position) into an array</span>\nimport java.util.Arrays;\n\npublic class program87 {\n\n    public static int[] insertElement(int[] array, int element, int position) {\n        if (position < 0 || position > array.length) {\n            System.out.println(\"Invalid position. Element cannot be inserted.\");\n            return array;\n        }\n\n        int[] newArray = new int[array.length + 1];\n\n        // Copy elements before the specified position\n        System.arraycopy(array, 0, newArray, 0, position);\n\n        // Insert the new element\n        newArray[position] = element;\n\n        // Copy elements after the specified position\n        System.arraycopy(array, position, newArray, position + 1, array.length - position);\n\n        return newArray;\n    }\n\n    public static void main(String[] args) {\n        int[] myArray = {1, 2, 3, 4, 5};\n        int elementToInsert = 10;\n        int insertPosition = 2;\n\n        // Call the method to insert the element\n        int[] newArray = insertElement(myArray, elementToInsert, insertPosition);\n\n        // Print the original and modified arrays\n        System.out.println(\"Original Array: \" + Arrays.toString(myArray));\n        System.out.println(\"Array after insertion: \" + Arrays.toString(newArray));\n    }\n}\n",
    "output": "Original Array: [1, 2, 3, 4, 5]\nArray after insertion: [1, 2, 10, 3, 4, 5]"
},
{
    "type": "basic",
    "index": "b88",
    "programName": "Write a Java program to reverse an array of integer values",
    "code": "<span class='colorGreen'>// Write a Java program to reverse an array of integer values</span>\nimport java.util.Arrays;\n\npublic class program88 {\n\n    public static void main(String[] args) {\n        int[] originalArray = {1, 2, 3, 4, 5};\n\n        System.out.println(\"Original Array: \" + Arrays.toString(originalArray));\n\n        // Reverse the array\n        reverseArray(originalArray);\n\n        System.out.println(\"Reversed Array: \" + Arrays.toString(originalArray));\n    }\n\n    public static void reverseArray(int[] array) {\n        int start = 0;\n        int end = array.length - 1;\n\n        while (start < end) {\n            // Swap elements at start and end indices\n            int temp = array[start];\n            array[start] = array[end];\n            array[end] = temp;\n\n            // Move indices towards the center\n            start++;\n            end--;\n        }\n    }\n}\n",
    "output": "Original Array: [1, 2, 3, 4, 5]\n        Reversed Array: [5, 4, 3, 2, 1]"
},
{
    "type": "basic",
    "index": "b89",
    "programName": "Write a Java program to find the common elements between two arrays",
    "code": "<span class='colorGreen'>// Write a Java program to find the common elements between two arrays</span>\nimport java.util.Arrays;\n\npublic class program89 {\n\n    public static void main(String[] args) {\n        int[] array1 = {1, 2, 3, 4, 5};\n        int[] array2 = {3, 5, 7, 9, 11};\n\n        System.out.println(\"Array 1: \" + Arrays.toString(array1));\n        System.out.println(\"Array 2: \" + Arrays.toString(array2));\n\n        // Find and print common elements\n        findAndPrintCommonElements(array1, array2);\n    }\n\n    public static void findAndPrintCommonElements(int[] array1, int[] array2) {\n        System.out.print(\"Common Elements: \");\n\n        for (int element1 : array1) {\n            for (int element2 : array2) {\n                if (element1 == element2) {\n                    System.out.print(element1 + \" \");\n                    break; // Move to the next element in array1\n                }\n            }\n        }\n        System.out.println(); // Add a newline for better readability\n    }\n}",
    "output": "Array 1: [1, 2, 3, 4, 5]\n        Array 2: [3, 5, 7, 9, 11]\n        Common Elements: 3 5"
},
{
    "type": "basic",
    "index": "b89",
    "programName": "Write a Java program to find the duplicate values of an array of integer values",
    "code": "<span class='colorGreen'>// Write a Java program to find the duplicate values of an array of integer values</span>\npublic class program90 {\n\n    public static void main(String[] args) {\n        int[] myArray = {1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 7, 9};\n\n        System.out.println(\"Original Array: \");\n        printArray(myArray);\n\n        System.out.println(\"Duplicate Values: \");\n        findAndPrintDuplicates(myArray);\n    }\n\n    public static void findAndPrintDuplicates(int[] array) {\n        for (int i = 0; i < array.length - 1; i++) {\n            for (int j = i + 1; j < array.length; j++) {\n                if (array[i] == array[j]) {\n                    System.out.println(array[i]);\n                    break;\n                }\n            }\n        }\n    }\n\n    public static void printArray(int[] array) {\n        for (int element : array) {\n            System.out.print(element + \" \");\n        }\n        System.out.println(); // Add a newline for better readability\n    }\n}\n",
    "output": "Original Array: \n1 2 3 4 2 5 6 3 7 8 7 9 \nDuplicate Values:\n2\n3\n7"
},
{
    "type": "basic",
    "index": "b90",
    "programName": "Write a Java program to convert an array to ArrayList",
    "code": "<span class='colorGreen'>// Write a Java program to convert an array to ArrayList</span>\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.List;\n\npublic class program91 {\n\n    public static void main(String[] args) {\n        // Create an array of integers\n        Integer[] myArray = {1, 2, 3, 4, 5};\n\n        // Convert the array to ArrayList\n        List<Integer> arrayList = arrayToArrayList(myArray);\n\n        // Print the original array and the ArrayList\n        System.out.println(\"Original Array: \" + Arrays.toString(myArray));\n        System.out.println(\"ArrayList: \" + arrayList);\n    }\n\n    public static <T> List<T> arrayToArrayList(T[] array) {\n        // Use Arrays.asList to convert the array to a fixed-size list\n        List<T> arrayList = new ArrayList<>(Arrays.asList(array));\n\n        // If you want a mutable ArrayList (optional)\n        // List<T> arrayList = new ArrayList<>(Arrays.asList(array));\n\n        return arrayList;\n    }\n}\n",
    "output": "Original Array: [1, 2, 3, 4, 5]\n        ArrayList: [1, 2, 3, 4, 5]"
},
{
    "type": "basic",
    "index": "b91",
    "programName": "Write a Java program to add two matrices of the same size",
    "code": "<span class='colorGreen'>// Write a Java program to add two matrices of the same size</span>\npublic class program92 {\n\n    public static void main(String[] args) {\n        // Define two matrices of the same size\n        int[][] matrix1 = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n        int[][] matrix2 = {{9, 8, 7}, {6, 5, 4}, {3, 2, 1}};\n\n        // Add the matrices\n        int[][] resultMatrix = addMatrices(matrix1, matrix2);\n\n        // Print the original matrices and the result matrix\n        System.out.println(\"Matrix 1:\");\n        printMatrix(matrix1);\n        System.out.println(\"Matrix 2:\");\n        printMatrix(matrix2);\n        System.out.println(\"Result Matrix:\");\n        printMatrix(resultMatrix);\n    }\n\n    public static int[][] addMatrices(int[][] matrix1, int[][] matrix2) {\n        int rows = matrix1.length;\n        int columns = matrix1[0].length;\n\n        int[][] resultMatrix = new int[rows][columns];\n\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < columns; j++) {\n                resultMatrix[i][j] = matrix1[i][j] + matrix2[i][j];\n            }\n        }\n\n        return resultMatrix;\n    }\n\n    public static void printMatrix(int[][] matrix) {\n        for (int[] row : matrix) {\n            for (int value : row) {\n                System.out.print(value + \" \");\n            }\n            System.out.println(); // Move to the next line for the next row\n        }\n        System.out.println(); // Add an extra line for better readability\n    }\n}\n",
    "output": "Matrix 1:\n1 2 3 \n4 5 6\n7 8 9\n\nMatrix 2:\n9 8 7\n6 5 4\n3 2 1\n\nResult Matrix:\n10 10 10\n10 10 10\n10 10 10\n"
},
{
    "type": "basic",
    "index": "b92",
    "programName": "Write a Java program to find second largest number from the array",
    "code": "<span class='colorGreen'>// Write a Java program to find second largest number from the array</span>\npublic class program93 {\n\n    public static void main(String[] args) {\n        int[] myArray = {5, 8, 2, 10, 7, 1, 9};\n\n        // Find the second largest number\n        int secondLargest = findSecondLargest(myArray);\n\n        // Print the original array and the second largest number\n        System.out.println(\"Original Array: \");\n        printArray(myArray);\n        System.out.println(\"Second Largest Number: \" + secondLargest);\n    }\n\n    public static int findSecondLargest(int[] array) {\n        if (array.length < 2) {\n            System.out.println(\"Array should have at least two elements.\");\n            return Integer.MIN_VALUE;\n        }\n\n        int largest = Integer.MIN_VALUE;\n        int secondLargest = Integer.MIN_VALUE;\n\n        for (int element : array) {\n            if (element > largest) {\n                secondLargest = largest;\n                largest = element;\n            } else if (element > secondLargest && element < largest) {\n                secondLargest = element;\n            }\n        }\n\n        return secondLargest;\n    }\n\n    public static void printArray(int[] array) {\n        for (int element : array) {\n            System.out.print(element + \" \");\n        }\n        System.out.println(); // Add a newline for better readability\n    }\n}\n",
    "output": "Original Array: \n        5 8 2 10 7 1 9 \n        Second Largest Number: 9"
},
{
    "type": "basic",
    "index": "b93",
    "programName": "Write a Java program to find second lowest number from the array",
    "code": "<span class='colorGreen'>//Write a Java program to find second lowest number from the array</span>\nimport java.util.Arrays;\n\npublic class program94 {\n\n    public static void main(String[] args) {\n        int[] myArray = {5, 8, 2, 10, 7, 1, 9};\n\n        // Find the second lowest number\n        int secondLowest = findSecondLowest(myArray);\n\n        // Print the original array and the second lowest number\n        System.out.println(\"Original Array: \" + Arrays.toString(myArray));\n        System.out.println(\"Second Lowest Number: \" + secondLowest);\n    }\n\n    public static int findSecondLowest(int[] array) {\n        if (array.length < 2) {\n            System.out.println(\"Array should have at least two elements.\");\n            return Integer.MIN_VALUE;\n        }\n\n        int lowest = Integer.MAX_VALUE;\n        int secondLowest = Integer.MAX_VALUE;\n\n        for (int element : array) {\n            if (element < lowest) {\n                secondLowest = lowest;\n                lowest = element;\n            } else if (element < secondLowest && element > lowest) {\n                secondLowest = element;\n            }\n        }\n\n        return secondLowest;\n    }\n}        ",
    "output": "Original Array: [5, 8, 2, 10, 7, 1, 9]\n        Second Lowest Number: 2"
},
{
    "type": "basic",
    "index": "b94",
    "programName": "Write a Java program to find the number of even and odd integers in a given array of integers",
    "code": "<span class='colorGreen'>// Write a Java program to find the number of even and odd integers in a given array of integers</span>\npublic class program95 {\n\n    public static void main(String[] args) {\n        int[] myArray = {1, 2, 3, 4, 5, 6, 7, 8, 9};\n\n        // Find the number of even and odd integers\n        int[] result = findEvenOddCount(myArray);\n\n        // Print the original array and the count of even and odd integers\n        System.out.println(\"Original Array: \");\n        printArray(myArray);\n        System.out.println(\"Number of Even Integers: \" + result[0]);\n        System.out.println(\"Number of Odd Integers: \" + result[1]);\n    }\n\n    public static int[] findEvenOddCount(int[] array) {\n        int evenCount = 0;\n        int oddCount = 0;\n\n        for (int element : array) {\n            if (element % 2 == 0) {\n                evenCount++;\n            } else {\n                oddCount++;\n            }\n        }\n\n        int[] result = {evenCount, oddCount};\n        return result;\n    }\n\n    public static void printArray(int[] array) {\n        for (int element : array) {\n            System.out.print(element + \" \");\n        }\n        System.out.println(); // Add a newline for better readability\n    }\n}\n",
    "output": "Original Array:\n        1 2 3 4 5 6 7 8 9\n        Number of Even Integers: 4\n       Number of Odd Integers: 5"
},
{
    "type": "basic",
    "index": "b95",
    "programName": "Write a Java program to get the difference between the largest and smallest values in an array of integers",
    "code": "<span class='colorGreen'>// Write a Java program to get the difference between the largest and smallest values in an array of integers</span>\npublic class program96 {\n\n    public static void main(String[] args) {\n        int[] myArray = {5, 8, 2, 10, 7, 1, 9};\n\n        // Find the difference between the largest and smallest values\n        int difference = findDifferenceBetweenMaxAndMin(myArray);\n\n        // Print the original array and the difference\n        System.out.println(\"Original Array: \");\n        printArray(myArray);\n        System.out.println(\"Difference between Max and Min: \" + difference);\n    }\n\n    public static int findDifferenceBetweenMaxAndMin(int[] array) {\n        if (array.length < 2) {\n            System.out.println(\"Array should have at least two elements.\");\n            return -1; // Return a sentinel value indicating an error\n        }\n\n        int min = array[0];\n        int max = array[0];\n\n        for (int element : array) {\n            if (element < min) {\n                min = element;\n            } else if (element > max) {\n                max = element;\n            }\n        }\n\n        return max - min;\n    }\n\n    public static void printArray(int[] array) {\n        for (int element : array) {\n            System.out.print(element + \" \");\n        }\n        System.out.println(); // Add a newline for better readability\n    }\n}\n",
    "output": "Original Array:\n5 8 2 10 7 1 9 \nDifference between Max and Min: 9"
},
{
    "type": "basic",
    "index": "b96",
    "programName": "Write a Java program to segregate all 0s on left side and all 1s on right side of a given array of 0s and 1s",
    "code": "<span class='colorGreen'>// Write a Java program to segregate all 0s on left side and all 1s on right side of a given array of 0s and 1s</span>\npublic class program97 {\n\n    public static void main(String[] args) {\n        int[] myArray = {0, 1, 0, 1, 1, 0, 1, 0, 0, 1};\n\n        // Segregate 0s and 1s\n        segregateZerosAndOnes(myArray);\n\n        // Print the segregated array\n        System.out.println(\"Segregated Array: \");\n        printArray(myArray);\n    }\n\n    public static void segregateZerosAndOnes(int[] array) {\n        int left = 0;\n        int right = array.length - 1;\n\n        while (left < right) {\n            while (array[left] == 0 && left < right) {\n                left++;\n            }\n\n            while (array[right] == 1 && left < right) {\n                right--;\n            }\n\n            if (left < right) {\n                // Swap 0s on the left with 1s on the right\n                array[left] = 0;\n                array[right] = 1;\n                left++;\n                right--;\n            }\n        }\n    }\n\n    public static void printArray(int[] array) {\n        for (int element : array) {\n            System.out.print(element + \" \");\n        }\n        System.out.println(); // Add a newline for better readability\n    }\n}\n",
    "output": "Segregated Array:\n0 0 0 0 0 1 1 1 1 1 "
},
{
    "type": "basic",
    "index": "b97",
    "programName": "Write a Java program to cyclically rotate a given array clockwise by one",
    "code": "<span class='colorGreen'>// Write a Java program to cyclically rotate a given array clockwise by one</span>\npublic class program98 {\n\n    public static void main(String[] args) {\n        int[] myArray = {1, 2, 3, 4, 5};\n\n        // Rotate the array clockwise by one position\n        rotateClockwise(myArray);\n\n        // Print the rotated array\n        System.out.println(\"Rotated Array: \");\n        printArray(myArray);\n    }\n\n    public static void rotateClockwise(int[] array) {\n        if (array.length <= 1) {\n            return; // No need to rotate if the array has 0 or 1 element\n        }\n\n        int lastElement = array[array.length - 1];\n\n        // Shift elements to the right\n        for (int i = array.length - 1; i > 0; i--) {\n            array[i] = array[i - 1];\n        }\n\n        // Move the last element to the beginning\n        array[0] = lastElement;\n    }\n\n    public static void printArray(int[] array) {\n        for (int element : array) {\n            System.out.print(element + \" \");\n        }\n        System.out.println(); // Add a newline for better readability\n    }\n}\n",
    "output": "Rotated Array:\n5 1 2 3 4 "
},
{
    "type": "basic",
    "index": "b98",
    "programName": "java program to print all unique element in an array",
    "code": "<span class='colorGreen'>// java program to print all unique element in an array</span>\npublic class program99 {\n\n    public static void main(String[] args) {\n        int[] myArray = {1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 7, 9};\n\n        // Print unique elements in the array\n        System.out.println(\"Unique Elements in the Array: \");\n        printUniqueElements(myArray);\n    }\n\n    public static void printUniqueElements(int[] array) {\n        for (int i = 0; i < array.length; i++) {\n            boolean isUnique = true;\n\n            // Check if the element is present elsewhere in the array\n            for (int j = 0; j < array.length; j++) {\n                if (i != j && array[i] == array[j]) {\n                    isUnique = false;\n                    break;\n                }\n            }\n\n            if (isUnique) {\n                System.out.print(array[i] + \" \");\n            }\n        }\n\n        System.out.println(); // Add a newline for better readability\n    }\n}\n",
    "output": "Unique Elements in the Array:\n1 4 5 6 8 9 "
},
{
    "type": "basic",
    "index": "b99",
    "programName": "Write a Java Program to Sort the Array in an Ascending Order",
    "code": "<span class='colorGreen'>// Write a Java Program to Sort the Array in an Ascending Order</span>\nimport java.util.Arrays;\n\npublic class program100 {\n\n    public static void main(String[] args) {\n        int[] myArray = {5, 2, 8, 1, 6, 4};\n\n        // Sort the array in ascending order\n        sortArrayAscending(myArray);\n\n        // Print the sorted array\n        System.out.println(\"Sorted Array in Ascending Order: \");\n        printArray(myArray);\n    }\n\n    public static void sortArrayAscending(int[] array) {\n        // Use Arrays.sort() to sort the array in ascending order\n        Arrays.sort(array);\n    }\n\n    public static void printArray(int[] array) {\n        for (int element : array) {\n            System.out.print(element + \" \");\n        }\n        System.out.println(); \n    }\n}\n",
    "output": "Sorted Array in Ascending Order:\n1 2 4 5 6 8 "
},
{
    "type": "basic",
    "index": "b100",
    "programName": "Write a Java Program to Sort the Array in an Descending Order",
    "code": "<span class='colorGreen'>// Write a Java Program to Sort the Array in an Descending Order</span>\npublic class program101 {\n\n    public static void main(String[] args) {\n        int[] myArray = {5, 2, 8, 1, 6, 4};\n\n        // Sort the array in descending order\n        sortArrayDescending(myArray);\n\n        // Print the sorted array\n        System.out.println(\"Sorted Array in Descending Order: \");\n        printArray(myArray);\n    }\n\n    public static void sortArrayDescending(int[] array) {\n        int n = array.length;\n\n        for (int i = 0; i < n - 1; i++) {\n            for (int j = 0; j < n - 1 - i; j++) {\n                if (array[j] < array[j + 1]) {\n                    // Swap elements if they are in the wrong order\n                    int temp = array[j];\n                    array[j] = array[j + 1];\n                    array[j + 1] = temp;\n                }\n            }\n        }\n    }\n\n    public static void printArray(int[] array) {\n        for (int element : array) {\n            System.out.print(element + \" \");\n        }\n        System.out.println(); // Add a newline for better readability\n    }\n}\n",
    "output": "Sorted Array in Descending Order: \n8 6 5 4 2 1 "
},
{
    "type": "basic",
    "index": "b101",
    "programName": "Write a Java Program to Sort Names in an Alphabetical Order",
    "code": "<span class='colorGreen'>// Write a Java Program to Sort Names in an Alphabetical Order</span>\nimport java.util.Arrays;\n\npublic class program102 {\n\n    public static void main(String[] args) {\n        String[] names = {\"Alice\", \"Bob\", \"Charlie\", \"David\", \"Eva\"};\n\n        // Sort the names in alphabetical order\n        sortNamesAlphabetically(names);\n\n        // Print the sorted names\n        System.out.println(\"Sorted Names in Alphabetical Order: \");\n        printNames(names);\n    }\n\n    public static void sortNamesAlphabetically(String[] names) {\n        // Use Arrays.sort() to sort the array of names\n        Arrays.sort(names);\n    }\n\n    public static void printNames(String[] names) {\n        for (String name : names) {\n            System.out.println(name);\n        }\n    }\n}\n",
    "output": "Sorted Names in Alphabetical Order:         Alice        Bob        Charlie        David        Eva"
},
{
    "type": "basic",
    "index": "b102",
    "programName": "Write a Java Program to Display Transpose Matrix",
    "code": "<span class='colorGreen'>// Write a Java Program to Display Transpose Matrix</span>\npublic class program103 {\n\n    public static void main(String[] args) {\n        int[][] originalMatrix = {\n                {1, 2, 3},\n                {4, 5, 6},\n                {7, 8, 9}\n        };\n\n        // Display the original matrix\n        System.out.println(\"Original Matrix:\");\n        printMatrix(originalMatrix);\n\n        // Calculate and display the transpose of the matrix\n        int[][] transposeMatrix = calculateTranspose(originalMatrix);\n        System.out.println(\"\nTranspose Matrix:\");\n        printMatrix(transposeMatrix);\n    }\n\n    public static int[][] calculateTranspose(int[][] matrix) {\n        int rows = matrix.length;\n        int columns = matrix[0].length;\n\n        int[][] transposeMatrix = new int[columns][rows];\n\n        for (int i = 0; i < columns; i++) {\n            for (int j = 0; j < rows; j++) {\n                transposeMatrix[i][j] = matrix[j][i];\n            }\n        }\n\n        return transposeMatrix;\n    }\n\n    public static void printMatrix(int[][] matrix) {\n        for (int[] row : matrix) {\n            for (int value : row) {\n                System.out.print(value + \" \");\n            }\n            System.out.println(); // Move to the next line for the next row\n        }\n        System.out.println(); // Add an extra line for better readability\n    }\n}\n",
    "output": "Original Matrix:\n1 2 3 \n4 5 6\n7 8 9\n\n\nTranspose Matrix:\n1 4 7\n2 5 8\n3 6 9\n\n"
},
{
    "type": "basic",
    "index": "b103",
    "programName": "Write a Java Program to Search Key Elements in an Array",
    "code": "<span class='colorGreen'>// Write a Java Program to Search Key Elements in an Array</span>\npublic class program104 {\n\n    public static void main(String[] args) {\n        int[] myArray = {1, 4, 6, 8, 12, 15, 18};\n        int key = 12;\n\n        // Search for the key element in the array\n        int index = searchArray(myArray, key);\n\n        // Display the result\n        if (index != -1) {\n            System.out.println(\"Key \" + key + \" found at index \" + index);\n        } else {\n            System.out.println(\"Key \" + key + \" not found in the array\");\n        }\n    }\n\n    public static int searchArray(int[] array, int key) {\n        for (int i = 0; i < array.length; i++) {\n            if (array[i] == key) {\n                return i; // Return the index if the key is found\n            }\n        }\n        return -1; // Return -1 if the key is not found\n    }\n}\n",
    "output": "Key 12 found at index 4"
},
{
    "type": "basic",
    "index": "b104",
    "programName": "Write a Java Program to Accept the Marks of a Student and find Total Marks and Percentage",
    "code": "<span class='colorGreen'>// Write a Java Program to Accept the Marks of a Student and find Total Marks and Percentage</span>\nimport java.util.Scanner;\n\npublic class program105 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the number of subjects\n        System.out.print(\"Enter the number of subjects: \");\n        int numberOfSubjects = scanner.nextInt();\n\n        // Input marks for each subject\n        int[] marks = new int[numberOfSubjects];\n        for (int i = 0; i < numberOfSubjects; i++) {\n            System.out.print(\"Enter marks for subject \" + (i + 1) + \": \");\n            marks[i] = scanner.nextInt();\n        }\n\n        // Calculate total marks and percentage\n        int totalMarks = calculateTotalMarks(marks);\n        double percentage = calculatePercentage(totalMarks, numberOfSubjects);\n\n        // Display the results\n        System.out.println(\"\nTotal Marks: \" + totalMarks);\n        System.out.println(\"Percentage: \" + percentage + \"%\");\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static int calculateTotalMarks(int[] marks) {\n        int total = 0;\n        for (int mark : marks) {\n            total += mark;\n        }\n        return total;\n    }\n\n    public static double calculatePercentage(int totalMarks, int numberOfSubjects) {\n        return (double) totalMarks / numberOfSubjects;\n    }\n}\n",
    "output": "Enter the number of subjects: 4\n        Enter marks for subject 1: 92\n        Enter marks for subject 2: 45\n        Enter marks for subject 3: 87\n        Enter marks for subject 4: 79\n        \n        Total Marks: 303\n        Percentage: 75.75%"
},
{
    "type": "basic",
    "index": "b105",
    "programName": "Write a java program to print numbers from 1 to 10 using loop",
    "code": "<span class='colorGreen'>// Write a java program to print numbers from 1 to 10 using loop</span>\npublic class program106{\n    public static void main(String args[]){\n\n        for(int i=1;i<=10;i++){\n            System.out.println(i);\n        }\n    }\n}\n",
    "output": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10"
},
{
    "type": "basic",
    "index": "b106",
    "programName": "Write a java program to calculate the sum of first 10 natural number using loop",
    "code": "<span class='colorGreen'>// Write a java program to calculate the sum of first 10 natural number using loop</span>\npublic class program107{\n    public static void main(String args[]){\n\n        int sum = 0;\n        for(int i=1;i<=10;i++){\n            sum += i;\n        }\n        System.out.println(\"Sum of first 10 natural numbers are \" + sum);\n    }\n}\n",
    "output": "Sum of first 10 natural numbers are 55"
},
{
    "type": "basic",
    "index": "b107",
    "programName": "Write a Java program to print multiplication table of given number",
    "code": "<span class='colorGreen'>// Write a Java program to print multiplication table of given number</span>\nimport java.util.Scanner;\n\npublic class program108{\n    public static void main(String args[]){\n\n        Scanner scanner = new Scanner(System.in);\n        \n        System.out.print(\"Enter the number of rows : \");\n        int nRows = scanner.nextInt();\n\n        System.out.print(\"Enter the number to display table : \");\n        int num = scanner.nextInt();\n\n        for(int i = 1; i<= nRows; i++){\n            System.out.println(num + \" x \" +  i + \" = \" + (i*num));\n        }\n    }\n}\n",
    "output": "Enter the number of rows : 5\nEnter the number to display table : 4\n4 x 1 = 4\n4 x 2 = 8\n4 x 3 = 12\n4 x 4 = 16\n4 x 5 = 20\n"
},
{
    "type": "basic",
    "index": "b108",
    "programName": "Write a Java program to find the factorial value of any number entered through the keyboard",
    "code": "<span class='colorGreen'>// Write a Java program to find the factorial value of any number entered through the keyboard</span>\nimport java.util.Scanner;\n\npublic class program109 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the number from the user\n        System.out.print(\"Enter a number to calculate its factorial: \");\n        int number = scanner.nextInt();\n\n        // Calculate the factorial\n        long factorial = calculateFactorial(number);\n\n        // Display the result\n        System.out.println(\"Factorial of \" + number + \" is: \" + factorial);\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static long calculateFactorial(int n) {\n        if (n < 0) {\n            System.out.println(\"Factorial is not defined for negative numbers.\");\n            return -1;\n        }\n\n        long factorial = 1;\n        for (int i = 1; i <= n; i++) {\n            factorial *= i;\n        }\n\n        return factorial;\n    }\n}\n",
    "output": "Enter a number to calculate its factorial: 5\n        Factorial of 5 is: 120"
},
{
    "type": "basic",
    "index": "b109",
    "programName": "Write a Java program that prompts the user to input an integer and then outputs the number with the digits reversed order",
    "code": "<span class='colorGreen'>// Write a Java program that prompts the user to input an integer and then outputs the number with the digits reversed order</span>\nimport java.util.Scanner;\n\npublic class program110 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input an integer from the user\n        System.out.print(\"Enter an integer: \");\n        int number = scanner.nextInt();\n\n        // Reverse the digits\n        int reversedNumber = reverseDigits(number);\n\n        // Display the result\n        System.out.println(\"Reversed number: \" + reversedNumber);\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static int reverseDigits(int num) {\n        int reversedNum = 0;\n\n        while (num != 0) {\n            int digit = num % 10;\n            reversedNum = reversedNum * 10 + digit;\n            num /= 10;\n        }\n\n        return reversedNum;\n    }\n}\n",
    "output": "Enter an integer: 12345\n        Reversed number: 54321"
},
{
    "type": "basic",
    "index": "b110",
    "programName": "Write a Java program that reads a set of integers, and then prints the sum of the even and odd integers using loop",
    "code": "<span class='colorGreen'>// Write a Java program that reads a set of integers, and then prints the sum of the even and odd integers using loop</span>\nimport java.util.Scanner;\n\npublic class program111 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the number of integers\n        System.out.print(\"Enter the number of integers: \");\n        int count = scanner.nextInt();\n\n        int sumEven = 0;\n        int sumOdd = 0;\n\n        // Input and calculate the sum of even and odd integers\n        for (int i = 0; i < count; i++) {\n            System.out.print(\"Enter integer \" + (i + 1) + \": \");\n            int num = scanner.nextInt();\n\n            if (num % 2 == 0) {\n                sumEven += num; // Add to the sum of even integers\n            } else {\n                sumOdd += num;  // Add to the sum of odd integers\n            }\n        }\n\n        // Display the results\n        System.out.println(\"Sum of even integers: \" + sumEven);\n        System.out.println(\"Sum of odd integers: \" + sumOdd);\n\n        // Close the scanner\n        scanner.close();\n    }\n}",
    "output": "Enter the number of integers: 3\n        Enter integer 1: 4\n        Enter integer 2: 2\n        Enter integer 3: 1\n        Sum of even integers: 6\n        Sum of odd integers: 1"
},
{
    "type": "basic",
    "index": "b111",
    "programName": "Write a Java program to check whether the number is a prime number or not",
    "code": "<span class='colorGreen'>// Write a Java program to check whether the number is a prime number or not</span>\nimport java.util.Scanner;\n\npublic class program112 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input a number from the user\n        System.out.print(\"Enter a number: \");\n        int number = scanner.nextInt();\n\n        // Check if the number is prime\n        boolean isPrime = isPrimeNumber(number);\n\n        // Display the result\n        if (isPrime) {\n            System.out.println(number + \" is a prime number.\");\n        } else {\n            System.out.println(number + \" is not a prime number.\");\n        }\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static boolean isPrimeNumber(int num) {\n        if (num <= 1) {\n            return false; // Numbers less than or equal to 1 are not prime\n        }\n\n        // Check for factors up to the square root of the number\n        for (int i = 2; i <= Math.sqrt(num); i++) {\n            if (num % i == 0) {\n                return false; // Found a factor, not a prime number\n            }\n        }\n\n        return true; // No factors found, it is a prime number\n    }\n}",
    "output": "Enter a number: 6\n        6 is not a prime number."
},
{
    "type": "basic",
    "index": "b112",
    "programName": "Write a Java program to calculate HCF of Two given numbers using loop",
    "code": "<span class='colorGreen'>// Write a Java program to calculate HCF of Two given numbers using loop</span>\nimport java.util.Scanner;\n\npublic class program113 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input two numbers from the user\n        System.out.print(\"Enter the first number: \");\n        int num1 = scanner.nextInt();\n\n        System.out.print(\"Enter the second number: \");\n        int num2 = scanner.nextInt();\n\n        // Calculate and display the HCF\n        int hcf = calculateHCF(num1, num2);\n        System.out.println(\"HCF of \" + num1 + \" and \" + num2 + \" is: \" + hcf);\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static int calculateHCF(int a, int b) {\n        // Ensure a is greater than or equal to b\n        if (b > a) {\n            int temp = a;\n            a = b;\n            b = temp;\n        }\n\n        // Calculate HCF using the Euclidean algorithm\n        while (b != 0) {\n            int remainder = a % b;\n            a = b;\n            b = remainder;\n        }\n\n        return a; // HCF is the last non-zero remainder\n    }\n}\n",
    "output": "Enter the first number: 12\n        Enter the second number: 45\n        HCF of 12 and 45 is: 3"
},
{
    "type": "basic",
    "index": "b113",
    "programName": "Write a Java program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros",
    "code": "<span class='colorGreen'>// Write a Java program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros</span>\nimport java.util.Scanner;\n\npublic class program114 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        int positiveCount = 0;\n        int negativeCount = 0;\n        int zeroCount = 0;\n\n        char choice;\n\n        do {\n            // Input a number from the user\n            System.out.print(\"Enter a number: \");\n            int number = scanner.nextInt();\n\n            // Count positive, negative, and zero numbers\n            if (number > 0) {\n                positiveCount++;\n            } else if (number < 0) {\n                negativeCount++;\n            } else {\n                zeroCount++;\n            }\n\n            // Ask the user if they want to enter another number\n            System.out.print(\"Do you want to enter another number? (y/n): \");\n            choice = scanner.next().charAt(0);\n\n        } while (choice == 'y' || choice == 'Y');\n\n        // Display the counts\n        System.out.println(\"Count of positive numbers: \" + positiveCount);\n        System.out.println(\"Count of negative numbers: \" + negativeCount);\n        System.out.println(\"Count of zero numbers: \" + zeroCount);\n\n        // Close the scanner\n        scanner.close();\n    }\n}\n",
    "output": "Enter a number: 4\nDo you want to enter another number? (y/n): y\nEnter a number: -2\nDo you want to enter another number? (y/n): y\nEnter a number: 0\nDo you want to enter another number? (y/n): y\nEnter a number: 4\nDo you want to enter another number? (y/n): y\nEnter a number: 3\nDo you want to enter another number? (y/n): n\nCount of positive numbers: 3\nCount of negative numbers: 1\nCount of zero numbers: 1\n"
},
{
    "type": "basic",
    "index": "b114",
    "programName": "Write a Java program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered",
    "code": "<span class='colorGreen'>// Write a Java program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered</span>\nimport java.util.Scanner;\n\npublic class program115 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        int min = Integer.MAX_VALUE;\n        int max = Integer.MIN_VALUE;\n\n        char choice;\n\n        do {\n            // Input a number from the user\n            System.out.print(\"Enter a number: \");\n            int number = scanner.nextInt();\n\n            // Update min and max values\n            if (number < min) {\n                min = number;\n            }\n\n            if (number > max) {\n                max = number;\n            }\n\n            // Ask the user if they want to enter another number\n            System.out.print(\"Do you want to enter another number? (y/n): \");\n            choice = scanner.next().charAt(0);\n\n        } while (choice == 'y' || choice == 'Y');\n\n        // Display the largest and smallest numbers\n        System.out.println(\"Largest number entered: \" + max);\n        System.out.println(\"Smallest number entered: \" + min);\n\n        // Close the scanner\n        scanner.close();\n    }\n}\n",
    "output": "Enter a number: 4\nDo you want to enter another number? (y/n): y\nEnter a number: 8\nDo you want to enter another number? (y/n): n\nLargest number entered: 8\nSmallest number entered: 4\n"
},
{
    "type": "basic",
    "index": "b115",
    "programName": "Write a Java program to print out all Armstrong numbers between 1 to 600 using loop",
    "code": "<span class='colorGreen'>// Write a Java program to print out all Armstrong numbers between 1 to 600 using loop</span>\npublic class program116 {\n\n    public static void main(String[] args) {\n        System.out.println(\"Armstrong numbers between 1 and 600:\");\n\n        for (int i = 1; i <= 600; i++) {\n            if (isArmstrongNumber(i)) {\n                System.out.print(i + \"  \");\n            }\n        }\n    }\n\n    public static boolean isArmstrongNumber(int number) {\n        int originalNumber, remainder, result = 0, n = 0;\n\n        originalNumber = number;\n\n        // Find the number of digits\n        while (originalNumber != 0) {\n            originalNumber /= 10;\n            ++n;\n        }\n\n        originalNumber = number;\n\n        // Calculate the sum of nth power of digits\n        while (originalNumber != 0) {\n            remainder = originalNumber % 10;\n            result += Math.pow(remainder, n);\n            originalNumber /= 10;\n        }\n\n        // Check if the number is Armstrong\n        return result == number;\n    }\n}\n",
    "output": "Armstrong numbers between 1 and 600:\n        1  2  3  4  5  6  7  8  9  153  370  371  407  "
},
{
    "type": "basic",
    "index": "b116",
    "programName": "Write a java program to count total number of notes in entered amount using loop",
    "code": "<span class='colorGreen'>// Write a java program to count total number of notes in entered amount using loop</span>\nimport java.util.Scanner;\n\npublic class program117 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the amount from the user\n        System.out.print(\"Enter the amount: \");\n        int amount = scanner.nextInt();\n\n        // Define the denominations of notes\n        int[] noteDenominations = {500, 200, 100, 50, 20, 10, 5, 2, 1};\n\n        // Count the number of notes for each denomination\n        for (int denomination : noteDenominations) {\n            int count = amount / denomination;\n            if (count > 0) {\n                System.out.println(\"Number of \" + denomination + \" notes: \" + count);\n                amount %= denomination; // Update the remaining amount\n            }\n        }\n\n        // Close the scanner\n        scanner.close();\n    }\n}\n",
    "output": "Enter the amount: 23570\n        Number of 500 notes: 47\n        Number of 50 notes: 1\n        Number of 20 notes: 1"
},
{
    "type": "basic",
    "index": "b117",
    "programName": "Write a Java program to print Fibonacci series of n terms where n is input by user using loop",
    "code": "<span class='colorGreen'>// Write a Java program to print Fibonacci series of n terms where n is input by user using loop</span>\nimport java.util.Scanner;\n\npublic class program118 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the number of terms from the user\n        System.out.print(\"Enter the number of terms for Fibonacci series: \");\n        int n = scanner.nextInt();\n\n        // Display the Fibonacci series\n        System.out.println(\"Fibonacci series up to \" + n + \" terms:\");\n        printFibonacciSeries(n);\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static void printFibonacciSeries(int n) {\n        int firstTerm = 0, secondTerm = 1;\n\n        for (int i = 0; i < n; i++) {\n            System.out.print(firstTerm + \" \");\n\n            int nextTerm = firstTerm + secondTerm;\n            firstTerm = secondTerm;\n            secondTerm = nextTerm;\n        }\n    }\n}\n",
    "output": "Enter the number of terms for Fibonacci series: 8\n        Fibonacci series up to 8 terms:\n        0 1 1 2 3 5 8 13"
},
{
    "type": "basic",
    "index": "b118",
    "programName": "Write a java program to calculate the sum of following series where n is input by user",
    "code": "<span class='colorGreen'>// Write a java program to calculate the sum of following series where n is input by user</span>\nimport java.util.Scanner;\n\npublic class program119 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the value of n from the user\n        System.out.print(\"Enter the value of n: \");\n        int n = scanner.nextInt();\n\n        // Calculate the sum of the series\n        double seriesSum = calculateSeriesSum(n);\n\n        // Display the result\n        System.out.println(\"Sum of the series: \" + seriesSum);\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static double calculateSeriesSum(int n) {\n        double sum = 0.0;\n\n        for (int i = 1; i <= n; i++) {\n            sum += 1.0 / i;\n        }\n\n        return sum;\n    }\n}",
    "output": "Enter the value of n: 24\n        Sum of the series: 3.7759581777535067"
},
{
    "type": "basic",
    "index": "b119",
    "programName": "Write a Java method to compute the average of three numbers",
    "code": "<span class='colorGreen'>// Write a Java method to compute the average of three numbers</span>\npublic class program120 {\n\n    public static void main(String[] args) {\n        // Example usage:\n        double num1 = 10.5;\n        double num2 = 20.0;\n        double num3 = 15.3;\n\n        double average = calculateAverage(num1, num2, num3);\n\n        System.out.println(\"The average of \" + num1 + \", \" + num2 + \", and \" + num3 + \" is: \" + average);\n    }\n\n    public static double calculateAverage(double num1, double num2, double num3) {\n        return (num1 + num2 + num3) / 3.0;\n    }\n}\n",
    "output": "The average of 10.5, 20.0, and 15.3 is: 15.266666666666666"
},
{
    "type": "basic",
    "index": "b120",
    "programName": "Write a Java method to find the smallest number among three numbers",
    "code": "<span class='colorGreen'>// Write a Java method to find the smallest number among three numbers</span>\npublic class program121{\n\n    public static void main(String[] args) {\n        // Example usage:\n        int num1 = 10;\n        int num2 = 5;\n        int num3 = 8;\n\n        int smallest = findSmallestNumber(num1, num2, num3);\n\n        System.out.println(\"The smallest number among \" + num1 + \", \" + num2 + \", and \" + num3 + \" is: \" + smallest);\n    }\n\n    public static int findSmallestNumber(int num1, int num2, int num3) {\n        int smallest = num1;\n\n        if (num2 < smallest) {\n            smallest = num2;\n        }\n\n        if (num3 < smallest) {\n            smallest = num3;\n        }\n\n        return smallest;\n    }\n}\n",
    "output": "The smallest number among 10, 5, and 8 is: 5"
},
{
    "type": "basic",
    "index": "b121",
    "programName": "Write a Java method to count all words in a string",
    "code": "<span class='colorGreen'>// Write a Java method to count all words in a string</span>\npublic class program122 {\n\n    public static void main(String[] args) {\n        // Example usage:\n        String inputString = \"This is a sample sentence.\";\n\n        int wordCount = countWords(inputString);\n\n        System.out.println(\"Number of words in the string: \" + wordCount);\n    }\n\n    public static int countWords(String input) {\n        // Split the input string into words based on spaces\n        String[] words = input.split(\"\\s+\");\n\n        // Return the number of words\n        return words.length;\n    }\n}\n",
    "output": "Number of words in the string: 5"
},
{
    "type": "basic",
    "index": "b122",
    "programName": "Write a Java method to count all vowels in a string",
    "code": "<span class='colorGreen'>// Write a Java method to count all vowels in a string</span>\npublic class program123 {\n\n    public static void main(String[] args) {\n        // Example usage:\n        String inputString = \"Hello, World!\";\n\n        int vowelCount = countVowels(inputString);\n\n        System.out.println(\"Number of vowels in the string: \" + vowelCount);\n    }\n\n    public static int countVowels(String input) {\n        // Convert the input string to lowercase to handle both uppercase and lowercase vowels\n        input = input.toLowerCase();\n\n        int count = 0;\n\n        // Iterate through each character in the string and check if it is a vowel\n        for (int i = 0; i < input.length(); i++) {\n            char ch = input.charAt(i);\n            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {\n                count++;\n            }\n        }\n\n        return count;\n    }\n}        ",
    "output": "Number of vowels in the string: 3"
},
{
    "type": "basic",
    "index": "b123",
    "programName": "Write a Java method to compute the sum of the digits in an integer",
    "code": "<span class='colorGreen'>// Write a Java method to compute the sum of the digits in an integer</span>\npublic class program124 {\n\n    public static void main(String[] args) {\n        // Example usage:\n        int number = 12345;\n\n        int digitSum = calculateDigitSum(number);\n\n        System.out.println(\"Sum of the digits in \" + number + \" is: \" + digitSum);\n    }\n\n    public static int calculateDigitSum(int num) {\n        // Ensure a non-negative number\n        num = Math.abs(num);\n\n        int sum = 0;\n\n        // Iterate through each digit and add it to the sum\n        while (num > 0) {\n            int digit = num % 10;\n            sum += digit;\n            num /= 10;\n        }\n\n        return sum;\n    }\n}\n",
    "output": "Sum of the digits in 12345 is: 15"
},
{
    "type": "basic",
    "index": "b124",
    "programName": "Write a Java method to check whether an year entered by the user is a leap year or not",
    "code": "<span class='colorGreen'>// Write a Java method to check whether an year entered by the user is a leap year or not</span>\nimport java.util.Scanner;\n\npublic class program56 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter a year to check if it's a leap year: \");\n        int year = scanner.nextInt();\n\n        if (isLeapYear(year)) {\n            System.out.println(year + \" is a leap year.\");\n        } else {\n            System.out.println(year + \" is not a leap year.\");\n        }\n\n        scanner.close();\n    }\n\n    public static boolean isLeapYear(int year) {\n        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n}\n",
    "output": "Enter a year to check if it's a leap year: 2024\n        2024 is a leap year."
},
{
    "type": "basic",
    "index": "b125",
    "programName": "Write a Java method to calculate the area of a triangle",
    "code": "<span class='colorGreen'>// Write a Java method to calculate the area of a triangle</span>\nimport java.util.Scanner;\n\npublic class program29{\n    public static void main(String args[]){\n\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter base : \");\n        double base = scanner.nextDouble();\n        System.out.print(\"Enter height : \");\n        double height = scanner.nextDouble();\n        \n        double triangleArea = 0.5 * base * height;\n\n        System.out.println(\"Area of triangle : \" + triangleArea);\n\n    }\n}\n",
    "output": "Enter base : 4\nEnter height : 7\nArea of triangle : 14.0"
},
{
    "type": "basic",
    "index": "b126",
    "programName": "Write a Java method to find the area of a pentagon",
    "code": "<span class='colorGreen'>// Write a Java method to find the area of a pentagon</span>\npublic class program127 {\n\n    public static void main(String[] args) {\n        // Example usage:\n        double sideLength = 5.0;\n\n        double area = calculatePentagonArea(sideLength);\n\n        System.out.println(\"Area of the pentagon with side length \" + sideLength + \" is: \" + area);\n    }\n\n    public static double calculatePentagonArea(double side) {\n        return 0.25 * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(side, 2);\n    }\n}\n",
    "output": "Area of the pentagon with side length 5.0 is: 43.01193501472417"
},
{
    "type": "basic",
    "index": "b127",
    "programName": "Write a Java method to find number is even number or not",
    "code": "<span class='colorGreen'>// Write a Java method to find number is even number or not</span>\nimport java.util.Scanner;\n\npublic class program128{\n    public static void main(String args[]){\n\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter a number : \");\n        int num = scanner.nextInt();\n        if(num%2==0){\n            System.out.println(\"\nIt is even number\");\n        }    \n        else{\n            System.out.println(\"\nIt is odd number\");\n\n        }\n\n    }\n}\n",
    "output": "Enter a number : 4\n\n        It is even number"
},
{
    "type": "basic",
    "index": "b128",
    "programName": "Write a Java method to check numbers is palindrome number or not",
    "code": "<span class='colorGreen'>// Write a Java method to check numbers is palindrome number or not</span>\nimport java.util.Scanner;\n\npublic class program129 {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter a positive number: \");\n        int number = scanner.nextInt();\n\n        if (isPalindrome(number)) {\n            System.out.println(number + \" is a palindrome.\");\n        } else {\n            System.out.println(number + \" is not a palindrome.\");\n        }\n\n        scanner.close();\n    }\n\n    // Function to check if a number is a palindrome\n    public static boolean isPalindrome(int num) {\n        if (num < 0) {\n            return false; // Negative numbers are not palindromes\n        }\n\n        int originalNum = num;\n        int reversedNum = 0;\n\n        while (num > 0) {\n            int digit = num % 10;\n            reversedNum = reversedNum * 10 + digit;\n            num /= 10;\n        }\n\n        return originalNum == reversedNum;\n    }\n}\n",
    "output": "Enter a positive number: 151\n        151 is a palindrome."
},
{
    "type": "basic",
    "index": "b129",
    "programName": "Write a Java method to displays prime numbers between 1 to 20",
    "code": "<span class='colorGreen'>// Write a Java method to displays prime numbers between 1 to 20</span>\npublic class program130 {\n\n    public static void main(String[] args) {\n        System.out.println(\"Prime numbers between 1 and 20:\");\n\n        printPrimesInRange(1, 20);\n    }\n\n    public static void printPrimesInRange(int start, int end) {\n        for (int i = start; i <= end; i++) {\n            if (isPrime(i)) {\n                System.out.print(i + \" \");\n            }\n        }\n    }\n\n    public static boolean isPrime(int num) {\n        if (num <= 1) {\n            return false; // Numbers less than or equal to 1 are not prime\n        }\n\n        // Check for factors up to the square root of the number\n        for (int i = 2; i <= Math.sqrt(num); i++) {\n            if (num % i == 0) {\n                return false; // Found a factor, not a prime number\n            }\n        }\n\n        return true; // No factors found, it is a prime number\n    }\n}\n",
    "output": "Prime numbers between 1 and 20:\n        2 3 5 7 11 13 17 19 "
},
{
    "type": "basic",
    "index": "b130",
    "programName": "rite a Java method to find GCD and LCM of Two Numbers",
    "code": "<span class='colorGreen'>// rite a Java method to find GCD and LCM of Two Numbers</span>\npublic class program131 {\n\n    public static void main(String[] args) {\n        // Example usage:\n        int num1 = 24;\n        int num2 = 36;\n\n        int gcd = findGCD(num1, num2);\n        int lcm = findLCM(num1, num2);\n\n        System.out.println(\"GCD of \" + num1 + \" and \" + num2 + \" is: \" + gcd);\n        System.out.println(\"LCM of \" + num1 + \" and \" + num2 + \" is: \" + lcm);\n    }\n\n    public static int findGCD(int a, int b) {\n        // Ensure positive values for GCD calculation\n        a = Math.abs(a);\n        b = Math.abs(b);\n\n        while (b != 0) {\n            int temp = b;\n            b = a % b;\n            a = temp;\n        }\n\n        return a;\n    }\n\n    public static int findLCM(int a, int b) {\n        // Ensure positive values for LCM calculation\n        a = Math.abs(a);\n        b = Math.abs(b);\n\n        // LCM is the product of the numbers divided by their GCD\n        return (a * b) / findGCD(a, b);\n    }\n}\n",
    "output": "GCD of 24 and 36 is: 12\n        LCM of 24 and 36 is: 72"
},
{
    "type": "basic",
    "index": "b131",
    "programName": "Write a Java method to find factorial using recursion in java",
    "code": "<span class='colorGreen'>// Write a Java method to find factorial using recursion in java</span>\npublic class program132 {\n\n    public static void main(String[] args) {\n        // Example usage:\n        int number = 5;\n\n        long factorial = calculateFactorial(number);\n\n        System.out.println(\"Factorial of \" + number + \" is: \" + factorial);\n    }\n\n    public static long calculateFactorial(int n) {\n        if (n < 0) {\n            throw new IllegalArgumentException(\"Factorial is not defined for negative numbers.\");\n        }\n\n        // Base case: factorial of 0 is 1\n        if (n == 0) {\n            return 1;\n        }\n\n        // Recursive case: n! = n * (n-1)!\n        return n * calculateFactorial(n - 1);\n    }\n}\n",
    "output": "Factorial of 5 is: 120"
},
{
    "type": "basic",
    "index": "b132",
    "programName": "Write a Java program to reverse an integer number",
    "code": "<span class='colorGreen'>// Write a Java program to reverse an integer number</span>\nimport java.util.Scanner;\n\npublic class program133 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the number from the user\n        System.out.print(\"Enter an integer: \");\n        int number = scanner.nextInt();\n\n        int reversedNumber = reverseInteger(number);\n\n        System.out.println(\"Reversed number: \" + reversedNumber);\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static int reverseInteger(int num) {\n        int reversedNum = 0;\n\n        while (num != 0) {\n            int digit = num % 10;\n            reversedNum = reversedNum * 10 + digit;\n            num /= 10;\n        }\n\n        return reversedNum;\n    }\n}\n",
    "output": "Enter an integer: 4678\n        Reversed number: 8764"
},
{
    "type": "basic",
    "index": "b133",
    "programName": "Write a Java program to round a float number to specified decimals",
    "code": "<span class='colorGreen'>// Write a Java program to round a float number to specified decimals</span>\nimport java.util.Scanner;\n\npublic class program134 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the float number from the user\n        System.out.print(\"Enter a float number: \");\n        float originalNumber = scanner.nextFloat();\n\n        // Input the number of decimals to round to\n        System.out.print(\"Enter the number of decimals to round to: \");\n        int decimalPlaces = scanner.nextInt();\n\n        float roundedNumber = roundFloat(originalNumber, decimalPlaces);\n\n        System.out.println(\"Rounded number: \" + roundedNumber);\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static float roundFloat(float number, int decimals) {\n        // Multiply by 10^decimals, round to the nearest integer, and divide by 10^decimals\n        float multiplier = (float) Math.pow(10, decimals);\n        return Math.round(number * multiplier) / multiplier;\n    }\n}\n",
    "output": "Enter a float number: 12.548\n        Enter the number of decimals to round to: 1\n        Rounded number: 12.5"
},
{
    "type": "basic",
    "index": "b134",
    "programName": "Write a Java program to test if a double number is an integer",
    "code": "<span class='colorGreen'>// Write a Java program to test if a double number is an integer</span>\nimport java.util.Scanner;\n\npublic class program135 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the double number from the user\n        System.out.print(\"Enter a double number: \");\n        double number = scanner.nextDouble();\n\n        boolean isInteger = isDoubleInteger(number);\n\n        if (isInteger) {\n            System.out.println(number + \" is an integer.\");\n        } else {\n            System.out.println(number + \" is not an integer.\");\n        }\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static boolean isDoubleInteger(double num) {\n        // Check if the number is equal to its floor value (rounded down)\n        return num == Math.floor(num);\n    }\n}\n",
    "output": "Enter a double number: 2154\n        2154.0 is an integer."
},
{
    "type": "basic",
    "index": "b135",
    "programName": "Write a Java program to round up the result of integer division",
    "code": "<span class='colorGreen'>// Write a Java program to round up the result of integer division</span>\nimport java.util.Scanner;\n\npublic class program136 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the dividend and divisor from the user\n        System.out.print(\"Enter the dividend: \");\n        int dividend = scanner.nextInt();\n\n        System.out.print(\"Enter the divisor: \");\n        int divisor = scanner.nextInt();\n\n        int result = roundUpDivision(dividend, divisor);\n\n        System.out.println(\"Result of division rounded up: \" + result);\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static int roundUpDivision(int dividend, int divisor) {\n        // Calculate the result of division\n        int result = dividend / divisor;\n\n        // If there is a remainder, round up by adding 1 to the result\n        if (dividend % divisor != 0) {\n            result++;\n        }\n\n        return result;\n    }\n}",
    "output": "Enter the dividend: 10\n        Enter the divisor: 2\n        Result of division rounded up: 5"
},
{
    "type": "basic",
    "index": "b136",
    "programName": "Write a Java program to convert Roman number to an integer number",
    "code": "<span class='colorGreen'>// Write a Java program to convert Roman number to an integer number</span>\nimport java.util.Scanner;\n\npublic class program137 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the Roman numeral from the user\n        System.out.print(\"Enter a Roman numeral: \");\n        String romanNumeral = scanner.nextLine().toUpperCase();\n\n        int integerNumber = romanToInteger(romanNumeral);\n\n        System.out.println(\"Integer representation: \" + integerNumber);\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static int romanToInteger(String romanNumeral) {\n        // Define the values of Roman numerals\n        int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};\n        String[] numerals = {\"M\", \"CM\", \"D\", \"CD\", \"C\", \"XC\", \"L\", \"XL\", \"X\", \"IX\", \"V\", \"IV\", \"I\"};\n\n        int result = 0;\n        int i = 0;\n\n        for (int j = 0; j < numerals.length; j++) {\n            while (romanNumeral.startsWith(numerals[j])) {\n                result += values[j];\n                i += numerals[j].length();\n                romanNumeral = romanNumeral.substring(numerals[j].length());\n            }\n        }\n\n        // If the input is not a valid Roman numeral, return -1\n        if (romanNumeral.length() > 0) {\n            System.out.println(\"Invalid Roman numeral input.\");\n            return -1;\n        }\n\n        return result;\n    }\n}\n",
    "output": "Enter a Roman numeral: VII\n        Integer representation: 7"
},
{
    "type": "basic",
    "index": "b137",
    "programName": "Write a Java program to convert a float value to absolute value",
    "code": "<span class='colorGreen'>// Write a Java program to convert a float value to absolute value</span>\nimport java.util.Scanner;\n\npublic class program138 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the float value from the user\n        System.out.print(\"Enter a float value: \");\n        float floatValue = scanner.nextFloat();\n\n        float absoluteValue = convertToAbsolute(floatValue);\n\n        System.out.println(\"Absolute value: \" + absoluteValue);\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static float convertToAbsolute(float value) {\n        // Use Math.abs() to get the absolute value of a float\n        return Math.abs(value);\n    }\n}\n",
    "output": "Enter a float value: 12.5500\n        Absolute value: 12.55"
},
{
    "type": "basic",
    "index": "b138",
    "programName": "Write a Java program to accept a float value of number and return a rounded float value",
    "code": "<span class='colorGreen'>// Write a Java program to accept a float value of number and return a rounded float value</span>\nimport java.util.Scanner;\n\npublic class program139 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the float value from the user\n        System.out.print(\"Enter a float value: \");\n        float floatValue = scanner.nextFloat();\n\n        // Input the number of decimal places to round to\n        System.out.print(\"Enter the number of decimal places to round to: \");\n        int decimalPlaces = scanner.nextInt();\n\n        float roundedValue = roundFloat(floatValue, decimalPlaces);\n\n        System.out.println(\"Rounded value: \" + roundedValue);\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static float roundFloat(float value, int decimalPlaces) {\n        // Use Math.round() to round the float value to the specified number of decimal places\n        float multiplier = (float) Math.pow(10, decimalPlaces);\n        return Math.round(value * multiplier) / multiplier;\n    }\n}\n",
    "output": "Enter a float value: 12.5548004\nEnter the number of decimal places to round to: 2\n        Rounded value: 12.55"
},

    {
        programName: "Program to print the largest element in an array",
        index: "1",
        pnumber:"1",
        code: `class Arr{
            public static void main(String[] args) {
        
                int arr[] ={5,3,10,-9,11};
        
                int l =arr[0];
        
                for(int i=0; i<arr.length; i++){
                    if(arr[i]>l){
                        l=arr[i];
                    }
                }
        
                System.out.println("Largest element in an array : " + l);
        
            }
        }`,
        type: "array",
        output: "Largest element in an array : 11"
    },

    // {
    //     programName: "Program to find the transpose of a given matrix",
    //     index: "2",
    //     code: `class Arr2 {

    //         public static void main(String[] args) {
        
    //             int a[][] = {
    //                     { 1, 2, 4, 5 },
    //                     { 6, 7, 8, 9 },
    //                     { 10, 11, 12, 13 }
    //             };
        
    //             int rows = a.length;
    //             int columns = a[0].length;
    //             int transpose[][] = new int[columns][rows];
        
    //             System.out.println("_____________Printing matrix__________________");
    //             for (int i = 0; i < rows; i++) {
    //                 for (int j = 0; j < columns; j++) {
    //                     System.out.print("   " + a[i][j]);
    //                     transpose[j][i] = a[i][j];
    //                 }
    //                 System.out.println("\n");
    //             }
        
    //             System.out.println("_____________Printing Transpose matrix__________________");
        
    //             for (int i = 0; i < columns; i++) {
    //                 for (int j = 0; j < rows; j++) {
        
    //                     System.out.print("  " + transpose[i][j]);
        
    //                 }
    //                 System.out.println("\n");
    //             }
        
    //         }
        
    //     }
    //     `,
    //     type: "2darray",
    //     output: "https://dl.dropbox.com/s/yld5hay8i5syaft/photo-1498050108023-c5249f4df085.jpeg?dl=0"

    // },


    {
        programName: "Progam to create a simple AWT application that displays a button with FlowLayout manager",
        index: "3",
        pnumber:"1",
        code: `class awt{
            public static void main(String[] args) {
                java.awt.Frame f = new java.awt.Frame("Button");
                java.awt.Button b = new java.awt.Button("Submit");
        
                f.add(b);
        
                f.setSize(400, 200);
                f.setLayout(new java.awt.FlowLayout());
                f.setVisible(true);
        
            }
        }
    `,
        type: "awt",
        output: "<img src='./java_images/awt1.png'>",



    },

    {
        programName: "Progam to create a simple AWT application that displays a TextField with FlowLayout manager",
        index: "4",
        pnumber:"2",
        code: `class awt {
            public static void main(String[] args) {
                java.awt.Frame f = new java.awt.Frame("Textfield");
        
                java.awt.TextField t = new java.awt.TextField("Enter your name ");
        
                f.add(t);
                f.setSize(400, 200);
                f.setLayout(new java.awt.FlowLayout());
                f.setVisible(true);
                
            }
            
        }
    `,
        type: "awt",
        output: "<img src='./java_images/awt4.png'>"



    },

    {
        programName: "Convert Object to String",
        index: "5",
        pnumber:"1",
        code: `class dConversion{

            public static void main(String[] args) {
                Object obj = new Integer(100);
                String s = String.valueOf(obj);
        
                System.out.println(s);
        
        
              
                if(s instanceof String){
                    System.out.println("It is string type...");
                }
        
            }
        }
    `,

        type: "dataConversion",
        output: "100<br>It is string type..."



    },

    {
        programName: "Write a Java method to check whether a string is a valid password",
        index: "6",
        pnumber:"1",
        code: `class Func {

            static String validatingPassword(String s) {
                int cap = 0, smLetter = 0, digit = 0;
        
                int len = 0;
        
                for (int i = 0; i < s.length(); i++) {
        
                    len++;
        
                    char c = s.charAt(i);
        
                    if (c > 46 && c < 58) {
                        digit++;
                    }
        
                    if (c > 64 && c < 91) {
                        cap++;
                    }
        
                    if (c > 96 && c < 123) {
                        smLetter++;
                    }
        
                }
                String result = "";
                if (cap < 2) {
                    result += "Password should contain at least  two capital letters.";
                }
        
                if (digit < 2) {
                    result += "\nPassword should contain at least 1 digit ...";
                }
        
                if (len < 8) {
                    result += "\nPassword should be minimum 8 characters";
                }
        
                if (cap >= 2 && digit >= 2 && len >= 8) {
                   result+="Password is valid...";
                }
        
                else{
                    result+="\nPassword is not valid...";
                }
        
                return result;
            }
        
            public static void main(String[] args) {
                String s = "HHellolodev45";
        
                System.out.println(validatingPassword(s));
        
            }
        
        }
    `,
        type: "strings",
        output: "Password is valid..."



    },

    {
        programName: "Write a Java program to create a class called Shape with a method called getArea().Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle",
        index: "7",
        pnumber:"1",
        code: `class Shape{
            public double getArea(double length  , double breadth){
                return length *breadth;
            
            
            
            }
        }
        class Rectangle  extends Shape{
            public double getArea(double length , double breadth){
                return length * breadth;
            }
        
            public static void main(String[] args) {
                Rectangle obj = new Rectangle();
                double result = obj.getArea(5.5, 10);
        
                System.out.println("Area of Rectangle is : " +result );
            }
        }`,
        type: "inheritance",
        output: "Area of Rectangle is : 55.0"



    },

    {
        programName: "Get all characters from the file, count number of lines, words, characters and display on the screen",
        index: "8",
        pnumber:"1",
        code: `import java.io.BufferedReader;
        import java.io.FileReader;
        import java.io.IOException;
        import java.util.Scanner;
        
        class FileRead {
            public static void main(String[] args) {
        
                System.out.println("Enter the file path  , Example : 7044_input_output_pro6.java");
                Scanner input = new Scanner(System.in);
                String file_path = input.nextLine();
        
                try {
        
                    BufferedReader br = new BufferedReader(new FileReader(file_path));
        
                    int num_of_lines = 0;
                    int num_of_words = 0;
                    int num_of_chars = 0;
                    String line;
        
                    while ((line = br.readLine()) != null) {
                        num_of_lines++;
                        String[] words = line.split("\\s+");
                        num_of_words += words.length;
                        num_of_chars += line.length();
                    }
        
                    System.out.println("Number of lines: " + num_of_lines);
                    System.out.println("Number of words: " + num_of_words);
                    System.out.println("Number of characters: " + num_of_chars);
        
                } catch (IOException e) {
                    System.err.println("Error reading the file: " + e.getMessage());
                }
            }
        }`,
        type: "input_output",
        output: "Enter the file path  , Example : 7044_input_output_pro6.java<br>7044_jdbc_pro2.java<br>Number of lines: 45<br>Number of words: 144<br>      Number of characters: 1434"



    },

    {
        programName: "Enter the boolean from user using Scanner class",
        index: "9",
        pnumber:"2",
        code: `import java.util.Scanner;

        class getBoolean {
            public static void main(String[] args) {
        
                System.out.print("Enter boolean value , true or false : ");
                Scanner input = new Scanner(System.in);
        
                try {
                    boolean b = input.nextBoolean();
                    System.out.println(b);
                }
        
                catch (java.util.InputMismatchException e) {
                    System.out.println("Wrong input , You have to type boolean value e.g true or false ");
        
                }
        
            }
        }`,

        type: "input_output",
        output: "Enter boolean value , true or false : true<br>true"



    },

    {
        programName: "Create the table in the database from Java API.",
        index: "10",
        pnumber:"1",
        code: `class DataDefination {
            public static void main(String[] args) {
                try {
        
                    Class.forName("com.mysql.jdbc.Driver");
        
                    java.sql.Connection connect = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:3306/test",
                            "root", "");
        
                    if (connect.isClosed()) {
                        System.out.println(" Your Connection is Closed!");
                        System.exit(0);
                    }
        
                    // ------------------------------------------------------
        
                    System.out.println(" Your Connection is Establised ");
        
                    java.sql.Statement state = connect.createStatement();
        
                    String create_table_query = "CREATE Table mytable3 (id int)";
        
                    Boolean result = state.execute(create_table_query);
        
                    if (result) {
                        System.out.println("Table created!");
                    }
                    // -----------------------------------------------------
        
                    connect.close();
        
                    if (connect.isClosed())
                        System.out.println(" Successfully Connection is Closed!");
                } catch (ClassNotFoundException error) {
                    System.out.print(error.getMessage());
                } catch (java.sql.SQLException error) {
                    System.out.print(error.getMessage());
                }
            }
        }`,
        type: "jdbc",
        output: ""



    },

    {
        programName: "CRUD resultSet",
        index: "11",
        pnumber:"2",
        code: `import java.sql.*;
        import java.util.Scanner;
        
        class CRUD_resultSet {
            public static void main(String[] args) {
        
                try {
        
                    Class.forName("com.mysql.jdbc.Driver");
                    Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/chatTest", "root", "");
                    Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,
                            ResultSet.CONCUR_UPDATABLE);
        
                    // resultset that is scrollable and updateable
                    ResultSet resultSet = statement.executeQuery("SELECT * FROM chats");
        
                    System.out.println("All rows before operations :");
                    while (resultSet.next()) {
                        System.out.println("Id = " + resultSet.getInt("id") + ", username = " + resultSet.getString("username")
                                + ", message = " + resultSet.getString("message"));
                    }
        
                    Scanner scanner = new Scanner(System.in);
        
                    // inserting a row
                    System.out.println("Enter values for new row:");
                    System.out.print("Id: ");
                    int id = scanner.nextInt();
                    scanner.nextLine();
                    System.out.print("Username: ");
                    String usernameValue = scanner.nextLine();
                    System.out.print("Message: ");
                    String message = scanner.nextLine();
        
                    resultSet.moveToInsertRow();
                    resultSet.updateInt("id", id);
                    resultSet.updateString("username", usernameValue);
                    resultSet.updateString("message", message);
                    resultSet.insertRow();
        
                    // updating a row
                    System.out.println("Enter values for row to update:");
                    System.out.print("Id: ");
                    int updateId = scanner.nextInt();
                    scanner.nextLine();
                    System.out.print("New message: ");
                    String newMessage = scanner.nextLine();
        
                    resultSet.beforeFirst();
                    while (resultSet.next()) {
                        if (resultSet.getInt("id") == updateId) {
                            resultSet.updateString("message", newMessage);
                            resultSet.updateRow();
                            break;
                        }
                    }
        
                    // deleting a row
                    System.out.println("Enter id of row to delete:");
                    int deleteId = scanner.nextInt();
                    scanner.nextLine();
        
                    resultSet.beforeFirst();
                    while (resultSet.next()) {
                        if (resultSet.getInt("id") == deleteId) {
                            resultSet.deleteRow();
                            break;
                        }
                    }
        
                    scanner.close();
        
                    System.out.println("All rows after operations :");
                    resultSet.beforeFirst();
                    while (resultSet.next()) {
                        System.out.println("Id = " + resultSet.getInt("id") + ", username = " + resultSet.getString("username")
                                + ", message = " + resultSet.getString("message"));
                    }
        
                } catch (SQLException e) {
                    System.out.println("SQLException: " + e.getMessage());
                } catch (Exception e) {
                    System.out.println("Exception: " + e.getMessage());
                }
            }
        }`,
        type: "jdbc",
        output: ""



    },

    {
        programName: "Write a Java program to create a class called Book with attributes for title, author, and ISBN, and methods to add and remove books from a collection.",
        index: "12",
        pnumber:"1",
        code: `class Book {
            String title;
            String author;
            String isbn;
        
            public Book(String title, String author, String isbn) {
                this.title = title;
                this.author = author;
                this.isbn = isbn;
            }
        
            public String getTitle() {
                return title;
            }
        
            public String getAuthor() {
                return author;
            }
        
            public String getIsbn() {
                return isbn;
            }
        }
        
        class Library {
            private Book[] books;
            int bookCount;
        
            public Library() {
                this.books = new Book[10];
                this.bookCount = 0;
            }
        
            public void addBook(Book book) {
                if (bookCount < 10) {
                    books[bookCount] = book;
                    bookCount++;
                    System.out.println("Book added: " + book.getTitle());
                } else {
                    System.out.println("Cannot add more books. Collection is full.");
                }
            }
        
            public void removeBook(String title) {
                for (int i = 0; i < bookCount; i++) {
                    if (books[i].getTitle().equals(title)) {
                        System.out.println("Book removed: " + books[i].getTitle());
                        // Shift books to fill the gap
                        for (int j = i; j < bookCount - 1; j++) {
                            books[j] = books[j + 1];
                        }
                        books[bookCount - 1] = null; // Set the last element to null
                        bookCount--;
                        return;
                    }
                }
                System.out.println("Book with title " + title + " not found.");
            }
        
            public void displayBooks() {
                System.out.println("Books in the collection:");
                for (int i = 0; i < bookCount; i++) {
                    System.out.println("Title: " + books[i].getTitle() + ", Author: " + books[i].getAuthor() + ", ISBN: "
                            + books[i].getIsbn());
                }
            }
        }
        
        class M {
            public static void main(String[] args) {
        
                Library bookCollection = new Library();
        
                Book book1 = new Book("Days in the Sun", " Neville Cardus", "978-0-7432-7356-5");
                Book book2 = new Book("Beyond a Boundary", "CLR James", "978-0-06-112008-4");
                Book book3 = new Book("The Art of Captaincy", "Mike Brearley", "978-0-06-112008-4");
        
                bookCollection.addBook(book1);
                bookCollection.addBook(book2);
                bookCollection.addBook(book3);
        
                System.out.println("\n\n_________________________________________");
                System.out.println("Books in the Library");
                bookCollection.displayBooks();
                bookCollection.removeBook("\n\nBeyond a Boundary");
        
                System.out.println("\n\n_________Current Books in the library_________\n");
                bookCollection.displayBooks();
            }
        }`,
        type: "oop",
        output: "https://dl.dropbox.com/s/yld5hay8i5syaft/photo-1498050108023-c5249f4df085.jpeg?dl=0"



    },

    {
        programName: "Write a Java program to create a class called Employee with a name, salary, and hire date attributes, and a method to calculate years of service.",
        index: "13",
        pnumber:"2",
        code: `import java.time.LocalDate;
        import java.time.Period;
        
        class Employee {
            String name;
            double salary;
            LocalDate hireDate;
        
            public Employee(String name, double salary, LocalDate hireDate) {
                this.name = name;
                this.hireDate = hireDate;
                this.salary = salary;
            }
        
            public int calculateYearsOfService() {
                LocalDate currentDate = LocalDate.now();
                Period period = Period.between(hireDate, currentDate);
                return period.getYears();
            }
        
            // Getter methods
            public String getName() {
                return name;
            }
        
            public double getSalary() {
                return salary;
            }
        
            public LocalDate getHireDate() {
                return hireDate;
            }
        }
        
        class Main {
            public static void main(String[] args) {
                Employee employee = new Employee("Jimmy ", 150000, LocalDate.of(2020, 3, 25));
        
                System.out.println("Employee name : " + employee.getName() + "\nSalary : " + employee.getSalary()
                        + "\nHire date : " + employee.getHireDate());
                int yearsOfService = employee.calculateYearsOfService();
                System.out.println("\n\nYears of Service: " + yearsOfService);
            }
        }`,
        type: "oop",
        output: "https://dl.dropbox.com/s/yld5hay8i5syaft/photo-1498050108023-c5249f4df085.jpeg?dl=0"



    },

    {
        programName: "Program to check whether a string is a Palindrome",
        index: "14",
        pnumber:"2",
        code: `class Palindrome {

            public static boolean isPalindrome(String str) {
            str = str.replaceAll("\\s+", "").toLowerCase();
            int length = str.length();
    
            if (length <= 1) {
                return true;
            }
    
            if (str.charAt(0) != str.charAt(length - 1)) {
                return false;
            }
    
            return isPalindrome(str.substring(1, length - 1));
        }
    
        public static void main(String[] args) {
            String input = "mom"; 
    
            System.out.println("Given string is : " + input);
    
            if (isPalindrome(input)) {
                System.out.println(input + " is a palindrome.");
            } else {
                System.out.println(input + " is not a palindrome.");
            }
        }
    }`,
        type: "strings",
        output: "mom is a palindrome"



    },

    {
        programName: "Program to find all subsets of a string",
        index: "15",
        pnumber:"3",
        code: `class Subsets {

            static void calculateSubsets(String str) {
                int len = str.length();
                int temp = 0;
          
        
                String subset[] = new String[len * (len + 1) / 2];
        
                for (int i = 0; i < len; i++) {
                    for (int j = i; j < len; j++) {
                        subset[temp] = str.substring(i, j + 1);
                        temp++;
                    }
        
                }
        
                for (String string : subset) {
                    System.out.println(string);
        
                }
            }
        
            public static void main(String[] args) {
                String str = "word";
                System.out.println("Given string : " + str);
        
                // f u n fu fn un fun;
        
                System.out.println("\nSubset of given string are : ");
                calculateSubsets(str);
        
            }
        }`,
        type: "strings",
        output: "<br>Given string : word<br>Subset of given string are :<br>w<br>wo<br>wor<br>word<br>o<br>or<br>ord<br>r<br>rd<br>d"



    },

    {
        programName: "Program to find the duplicate words in a string",
        index: "16",
        pnumber:"4",
        type:"strings",

        code: `class DuplicatW{
            public static void main(String[] args) {
                String str="this is duplicate word this is";
        
                System.out.println("String : " + str);
        
                str=str.toLowerCase();
                String words[] =str.split(" ");
                int count=1;
        
               
                for(int i=0; i<words.length; i++){
                    count=1;
        
                    for(int j=i+1; j<words.length; j++){
                        if(words[i].equals(words[j])){
                            count++;
        
                            words[j]="0";
                        }
                    }
        
                    if(count>1 && words[i]!="0"){
                        
                    System.out.println(words[i]);
                    }
                }
        
            }
        }`,
        output: "String : this is duplicate word this is<br>this<br>is"



    },


    //functions

    {
        "programName": "Write a java method to find the smallest number amoung three numbers.",
        "index": "f1",
        "pnumber": "1",
        "type": "function",
        "code": "<span class='colorGreen'>// Write a java method to find the smallest number amoung three numbers.</span>\nclass program1{\n    public static void main(String[] args) {\n        int num1 = 3;\n        int num2 = 17;\n        int num3 = 5;\n\n        int smallest = findSmallestNumber(num1, num2, num3);\n\n        System.out.println(\"The smallest number is: \" + smallest);\n    }\n\n    public static int findSmallestNumber(int num1, int num2, int num3) {\n        int smallest = num1;\n\n        if (num2 < smallest) {\n            smallest = num2;\n        }\n\n        if (num3 < smallest) {\n            smallest = num3;\n        }\n\n        return smallest;\n    }\n}\n",
        "output": "The smallest number is: 3"
    },
    {
        "index": "f2",
        "pnumber": "2",
        "type": "function",
        "programName": "Write a Java method to compute the average of three numbers.",
        "code": "<span class='colorGreen'>// Write a Java method to compute the average of three numbers.</span>\npublic class program2 {\n     static double computeAverage(double num1, double num2, double num3) {\n        return (num1 + num2 + num3) / 3.0;\n    }\n\n    public static void main(String[] args) {\n        double number1 = 10.0;\n        double number2 = 5.0;\n        double number3 = 8.0;\n\n        double average = computeAverage(number1, number2, number3);\n\n        System.out.println(\"The average is: \" + average);\n    }\n}\n",
        "output": "The average is: 7.666666666666667"
    },
    {
        "index": "f3",
        "pnumber": "3",
        "type": "function",
        "programName": "Write a Java method to display the middle character of a string. Note: a) If the length of the string is odd there will be two middle characters. b) If the length of the string is even there will be one middle character.",
        "code": "<span class='colorGreen'>// Write a Java method to display the middle character of a string. Note: a) If the length of the string is odd there will be two middle characters. b) If the length of the string is even there will be one middle character.</span>\nimport java.util.Scanner;\n\n  class program3 {\n  public static void main(String[] args)\n    {\n        Scanner in = new Scanner(System.in);\n        System.out.print(\"Input a string: \");\n        String str = in.nextLine();\n        System.out.print(\"The middle character in the string: \" + middle(str)+\"\n\");\n    }\n public static String middle(String str)\n    {\n        int position;\n        int length;\n        if (str.length() % 2 == 0)\n        {\n            position = str.length() / 2 - 1;\n            length = 2;\n        }\n        else\n        {\n            position = str.length() / 2;\n            length = 1;\n        }\n        return str.substring(position, position + length);\n    }\n}        ",
        "output": "Input a string: aryan\n        The middle character in the string: y"
    },
    {
        "index": "f4",
        "pnumber": "4",
        "type": "function",
        "programName": "Write a Java method to count all the words in a string.",
        "code": "<span class='colorGreen'>// Write a Java method to count all the words in a string.</span>\nclass a\n{\nstatic int countWord(String s)\n{\nint t=1;\nfor(int i=0; i<s.length(); i++)\n{\n\nif((s.charAt(i) == ' ') && (s.charAt(i+1) != ' '))\n{\nt++;\n}\n}\nreturn t;\n}\n\npublic static void main(String args[])\n{\n\nSystem.out.println(countWord(\"Hello How are you\"));\n}\n\n}",
        "output": "4"
    },
    {
        "index": "f5",
        "pnumber": "5",
        "type": "function",
        "programName": "Write a Java method to compute the future investment value at a given interest rate for a specified number of years.",
        "code": "<span class='colorGreen'>// Write a Java method to compute the future investment value at a given interest rate for a specified number of years.</span>\nimport java.util.Scanner;\npublic class program3 {\nScanner scanner = new Scanner(System.in);\n// Get user input\nSystem.out.print(\"Enter the principal amount (initial investment): \");\ndouble principal = scanner.nextDouble();\nSystem.out.print(\"Enter the annual interest rate (as a decimal): \");\ndouble annualInterestRate = scanner.nextDouble();\nSystem.out.print(\"Enter the number of years: \");\nint numberOfYears = scanner.nextInt();\n// Calculate and display the future investment value\ndouble futureValue = calculateFutureValue(principal, annualInterestRate, numberOfYears);\nSystem.out.println(\"Future Investment Value: $\" + futureValue);\n// Close the scanner\nscanner.close();\n}\n/**\n * Calculates the future investment value.\n *\n * @param principal           the principal amount (initial investment)\n * @param annualInterestRate the annual interest rate (as a decimal)\n * @param numberOfYears       the number of years\n * @return the future investment value\n */\npublic static double calculateFutureValue(double principal, double annualInterestRate, int numberOfYears) {\n// Convert annual interest rate to monthly interest rate\ndouble monthlyInterestRate = annualInterestRate / 12.0;\n// Calculate the future investment value using the compound interest formula\ndouble futureValue = principal * Math.pow(1 + monthlyInterestRate, numberOfYears * 12);\n// Round the result to two decimal places\nreturn Math.round(futureValue * 100.0) / 100.0;\n}\n}\n",
        "output": "Enter the principal amount (initial investment): 500\n        Enter the annual interest rate (as a decimal): 1.4\n        Enter the number of years: 3\n        Future Investment Value: $26559.38"
    },
    {
        "index": "f6",
        "pnumber": "6",
        "type": "function",
        "programName": "Write a Java method to print characters between two characters (i.e. A to P).",
        "code": "<span class='colorGreen'>// Write a Java method to print characters between two characters (i.e. A to P).</span>\nclass program3 {\nstatic void printCharactersBetween(char startChar, char endChar) {\nif (startChar > endChar) {\nchar temp = startChar;\nstartChar = endChar;\nendChar = temp;\n}\n\nfor (char ch = startChar; ch < endChar; ch++) {\nSystem.out.print(ch + \" \");\n}\nSystem.out.println(endChar); \n    }\n\n    public static void main(String[] args) {\nchar startChar = 'A';\n        char endChar = 'F';\n\n        System.out.println(\"Characters between \" + startChar + \" and \" + endChar + \":\");\n        printCharactersBetween(startChar, endChar);\n}\n}        ",
        "output": "Characters between A and F:\n        A B C D E F"
    },
    {
        "index": "f7",
        "pnumber": "7",
        "type": "function",
        "programName": "Write a Java method to check whether a string is a valid password.",
        "code": "<span class='colorGreen'>// Write a Java method to check whether a string is a valid password.</span>\nimport java.util.Scanner;\n\nclass program3 {\n    \npublic static final int PASSWORD_LENGTH = 8;\n\npublic static void main(String[] args) {\n\n        Scanner input = new Scanner(System.in);\n        System.out.print(\n                \"1. A password must have at least eight characters.\n\" +\n                \"2. A password consists of only letters and digits.\n\" +\n                \"3. A password must contain at least two digits \n\" +\n                \"Input a password (You are agreeing to the above Terms and Conditions.): \");\n        String s = input.nextLine();\n\n        if (is_Valid_Password(s)) {\n            System.out.println(\"Password is valid: \" + s);\n        } else {\n            System.out.println(\"Not a valid password: \" + s);\n        }\n\n    }\n\n    public static boolean is_Valid_Password(String password) {\n\n        if (password.length() < PASSWORD_LENGTH) return false;\n\n        int charCount = 0;\n        int numCount = 0;\n        for (int i = 0; i < password.length(); i++) {\n\n            char ch = password.charAt(i);\n\n            if (is_Numeric(ch)) numCount++;\n            else if (is_Letter(ch)) charCount++;\n            else return false;\n        }\n\n\n        return (charCount >= 2 && numCount >= 2);\n    }\n\n    public static boolean is_Letter(char ch) {\n        ch = Character.toUpperCase(ch);\n        return (ch >= 'A' && ch <= 'Z');\n    }\n\n\n    public static boolean is_Numeric(char ch) {\n\n        return (ch >= '0' && ch <= '9');\n    }\n}\n",
        "output": "1. A password must have at least eight characters.\n        2. A password consists of only letters and digits.\n        3. A password must contain at least two digits\n        Input a password (You are agreeing to the above Terms and Conditions.): aryanA12\n        Password is valid: aryanA12"
    },
    {
        "index": "f8",
        "pnumber": "8",
        "type": "function",
        "programName": "Write a Java method to display the current date and time.",
        "code": "<span class='colorGreen'>// Write a Java method to display the current date and time.</span>\nimport java.time.LocalDateTime;\nimport java.time.format.DateTimeFormatter;\n\npublic class DateTimeExample {\n\n    public static void main(String[] args) {\n        // Call the method to display the current date and time\n        displayCurrentDateTime();\n    }\n\n    /**\n     * Displays the current date and time.\n     */\n    public static void displayCurrentDateTime() {\n        // Get the current date and time\n        LocalDateTime currentDateTime = LocalDateTime.now();\n\n        // Define a custom date-time format (optional)\n        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(\"yyyy-MM-dd HH:mm:ss\");\n\n        // Format the current date and time using the defined format\n        String formattedDateTime = currentDateTime.format(formatter);\n\n        // Display the formatted date and time\n        System.out.println(\"Current Date and Time: \" + formattedDateTime);\n    }\n}\n",
        "output": "Current Date and Time: 2023-11-18 15:26:10"
    },
    {
        "index": "f9",
        "pnumber": "9",
        "type": "function",
        "programName": "Write a Java method to find all twin prime numbers less than 100.",
        "code": "<span class='colorGreen'>// Write a Java method to find all twin prime numbers less than 100.</span>\nclass program3 {\n    public static void main(String[] args) {\n        findTwinPrimes(100);\n    }\n\n    \n    private static boolean isPrime(int num) {\n        if (num < 2) {\n            return false;\n        }\n        for (int i = 2; i <= Math.sqrt(num); i++) {\n            if (num % i == 0) {\n                return false;\n            }\n        }\n        return true;\n    }\n\n    \n    private static void findTwinPrimes(int limit) {\n        System.out.println(\"Twin Prime Numbers less than \" + limit + \":\");\n        for (int i = 3; i < limit; i++) {\n            if (isPrime(i) && isPrime(i + 2)) {\n                System.out.println(\"(\" + i + \", \" + (i + 2) + \")\");\n            }\n        }\n    }\n}",
        "output": "Twin Prime Numbers less than 100:\n        (3, 5)\n        (5, 7)\n        (11, 13)\n        (17, 19)\n        (29, 31)\n        (41, 43)\n        (59, 61)\n        (71, 73)"
    },
    {
        "index": "f10",
        "pnumber": "10",
        "type": "function",
        "programName": "Write a Java method to count the number of digits in an integer with the value 2. The integer may be assumed to be non-negative.",
        "code": "<span class='colorGreen'>// Write a Java method to count the number of digits in an integer with the value 2. The integer may be assumed to be non-negative.</span>\npublic class program3 {\n    public static int countTwos(int number) {\n        String numberStr = String.valueOf(number);\n        int count = 0;\n\n        for (int i = 0; i < numberStr.length(); i++) {\n            if (numberStr.charAt(i) == '2') {\n                count++;\n            }\n        }\n\n        return count;\n    }\n\n    public static void main(String[] args) {\n        int number = 22253;\n        int numberOfTwos = countTwos(number);\n\n        System.out.println(\"The number of 2s in \" + number + \" is: \" + numberOfTwos);\n    }\n}",
        "output": "The number of 2s in 22253 is: 3"
    },
    {
        "index": "f11",
        "pnumber": "11",
        "type": "function",
        "programName": "Write a Java method that accepts three integers and checks whether they are consecutive or not. Returns true or false.",
        "code": "<span class='colorGreen'>// Write a Java method that accepts three integers and checks whether they are consecutive or not. Returns true or false.</span>\nimport java.util.Scanner;\n class program3 { \n public static void main(String s[] )\n    {\n        Scanner in = new Scanner(System.in);\n        System.out.print(\"Input the first number: \");\n        int x = in.nextInt();\n        System.out.print(\"Input the second number: \");\n        int y = in.nextInt();\n        System.out.print(\"Input the third number: \");\n        int z = in.nextInt();\n        System.out.print(\"The three given numbers are consecutive(true or false) : \") ;\n        System.out.println(test(x,y,z));\n        }\n\n public static boolean test(int x, int y, int z){\n    int max_num = Math.max(x, Math.max(y, z));\n    int min_num = Math.min(x, Math.min(y, z));\n    int middle_num = x+y+z - max_num - min_num;\n    return (max_num - middle_num) == 1 && (middle_num - min_num == 1);\n  }\n} ",
        "output": "Input the first number: 4\n        Input the second number: 6\n        Input the third number: 5\n        The three given numbers are consecutive(true or false) : true"
    },
    {
        "index": "f12",
        "pnumber": "12",
        "type": "function",
        "programName": "Write a Java method that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false",
        "code": "<span class='colorGreen'>// Write a Java method that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false</span>\n",
        "output": ""
    },

    // {
    //     "index": "f13",
    //     "pnumber": "13",
    //     "type": "function",
    //     "programName": "",
    //     "code": "<span class='colorGreen'>// </span>\n",
    //     "output": ""
    // },


    //2d array
    {
        "type": "2dArray",
        "index": "2darr1",
        "pnumber": "1",
        "programName": "Enter the Matrix of rows and columns entered by the user and print in matrix format",
        "code": "<span class='colorGreen'>// Enter the Matrix of rows and columns entered by the user and print in matrix format</span>\nimport java.util.Scanner;\n\npublic class program1 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the number of rows and columns from the user\n        System.out.print(\"Enter the number of rows: \");\n        int rows = scanner.nextInt();\n\n        System.out.print(\"Enter the number of columns: \");\n        int columns = scanner.nextInt();\n\n        // Input the matrix elements from the user\n        int[][] matrix = new int[rows][columns];\n        System.out.println(\"Enter the matrix elements:\");\n\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < columns; j++) {\n                System.out.print(\"Enter element at position (\" + (i + 1) + \",\" + (j + 1) + \"): \");\n                matrix[i][j] = scanner.nextInt();\n            }\n        }\n\n        // Print the matrix in matrix format\n        System.out.println(\"Matrix:\");\n\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < columns; j++) {\n                System.out.print(matrix[i][j] + \"\t\");\n            }\n            System.out.println(); // Move to the next line for the next row\n        }\n\n        // Close the scanner\n        scanner.close();\n    }\n}\n\n",
        "output": "Enter the number of rows:  \n3\nEnter the number of columns: 2\nEnter the matrix elements:\nEnter element at position (1,1): 10\nEnter element at position (1,2): 50\nEnter element at position (2,1): 40\nEnter element at position (2,2): 1\nEnter element at position (3,1): 6\nEnter element at position (3,2): 8\nMatrix:\n10      50\n40      1\n6       8\n"
    },
    {
        "type": "2dArray",
        "index": "2darr2",
        "pnumber": "2",
        "programName": "Program to Add Two Matrices",
        "code": "<span class='colorGreen'>// Program to Add Two Matrices</span>\nimport java.util.Scanner;\n\npublic class program2 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the dimensions of the matrices\n        System.out.print(\"Enter the number of rows: \");\n        int rows = scanner.nextInt();\n\n        System.out.print(\"Enter the number of columns: \");\n        int columns = scanner.nextInt();\n\n        // Input the elements of the first matrix\n        System.out.println(\"Enter the elements of the first matrix:\");\n        int[][] matrix1 = inputMatrix(rows, columns, scanner);\n\n        // Input the elements of the second matrix\n        System.out.println(\"Enter the elements of the second matrix:\");\n        int[][] matrix2 = inputMatrix(rows, columns, scanner);\n\n        // Add the matrices and print the result\n        System.out.println(\"Sum of the matrices:\");\n        printMatrix(addMatrices(matrix1, matrix2));\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static int[][] inputMatrix(int rows, int columns, Scanner scanner) {\n        int[][] matrix = new int[rows][columns];\n\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < columns; j++) {\n                System.out.print(\"Enter element at position (\" + (i + 1) + \",\" + (j + 1) + \"): \");\n                matrix[i][j] = scanner.nextInt();\n            }\n        }\n\n        return matrix;\n    }\n\n    public static int[][] addMatrices(int[][] matrix1, int[][] matrix2) {\n        int rows = matrix1.length;\n        int columns = matrix1[0].length;\n\n        int[][] sumMatrix = new int[rows][columns];\n\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < columns; j++) {\n                sumMatrix[i][j] = matrix1[i][j] + matrix2[i][j];\n            }\n        }\n\n        return sumMatrix;\n    }\n\n    public static void printMatrix(int[][] matrix) {\n        for (int[] row : matrix) {\n            for (int element : row) {\n                System.out.print(element + \"\t\");\n            }\n            System.out.println(); // Move to the next line for the next row\n        }\n    }\n}\n",
        "output": "Enter the number of rows: 3\nEnter the number of columns: 3\nEnter the elements of the first matrix:\nEnter element at position (1,1): 12\nEnter element at position (1,2): 5\nEnter element at position (1,3): 1\nEnter element at position (2,1): 2\nEnter element at position (2,2): 6\nEnter element at position (2,3): 9\nEnter element at position (3,1): 4\nEnter element at position (3,2): 63\nEnter element at position (3,3): 2\nEnter the elements of the second matrix:\nEnter element at position (1,1): 1\nEnter element at position (1,2): 2\nEnter element at position (1,3): 56\nEnter element at position (2,1): 4\nEnter element at position (2,2): 6\nEnter element at position (2,3): 3\nEnter element at position (3,1): 7\nEnter element at position (3,2): 0\nEnter element at position (3,3): 22\nSum of the matrices:\n13      7       57\n6       12      12\n11      63      24\n"
    },
    {
        "type": "2dArray",
        "index": "2darr3",
        "pnumber": "3",
        "programName": "Program to Multiply Two Matrices",
        "code": "<span class='colorGreen'>// Program to Multiply Two Matrices</span>\nimport java.util.Scanner;\n\npublic class program3 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the dimensions of the first matrix\n        System.out.print(\"Enter the number of rows for the first matrix: \");\n        int rows1 = scanner.nextInt();\n\n        System.out.print(\"Enter the number of columns for the first matrix: \");\n        int columns1 = scanner.nextInt();\n\n        // Input the elements of the first matrix\n        int[][] matrix1 = inputMatrix(rows1, columns1, \"first\", scanner);\n\n        // Input the dimensions of the second matrix\n        System.out.print(\"Enter the number of rows for the second matrix: \");\n        int rows2 = scanner.nextInt();\n\n        System.out.print(\"Enter the number of columns for the second matrix: \");\n        int columns2 = scanner.nextInt();\n\n        // Input the elements of the second matrix\n        int[][] matrix2 = inputMatrix(rows2, columns2, \"second\", scanner);\n\n        // Check if matrices can be multiplied\n        if (columns1 != rows2) {\n            System.out.println(\"Matrices cannot be multiplied. Number of columns in the first matrix must be equal to the number of rows in the second matrix.\");\n        } else {\n            // Multiply the matrices\n            int[][] productMatrix = multiplyMatrices(matrix1, matrix2);\n\n            // Print the result matrix\n            System.out.println(\"Product of the matrices:\");\n            printMatrix(productMatrix);\n        }\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static int[][] inputMatrix(int rows, int columns, String ordinal, Scanner scanner) {\n        System.out.println(\"Enter the elements of the \" + ordinal + \" matrix:\");\n\n        int[][] matrix = new int[rows][columns];\n\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < columns; j++) {\n                System.out.print(\"Enter element at position (\" + (i + 1) + \",\" + (j + 1) + \"): \");\n                matrix[i][j] = scanner.nextInt();\n            }\n        }\n\n        return matrix;\n    }\n\n    public static int[][] multiplyMatrices(int[][] matrix1, int[][] matrix2) {\n        int rows1 = matrix1.length;\n        int columns1 = matrix1[0].length;\n        int rows2 = matrix2.length;\n        int columns2 = matrix2[0].length;\n\n        int[][] productMatrix = new int[rows1][columns2];\n\n        for (int i = 0; i < rows1; i++) {\n            for (int j = 0; j < columns2; j++) {\n                for (int k = 0; k < columns1; k++) {\n                    productMatrix[i][j] += matrix1[i][k] * matrix2[k][j];\n                }\n            }\n        }\n\n        return productMatrix;\n    }\n\n    public static void printMatrix(int[][] matrix) {\n        for (int[] row : matrix) {\n            for (int element : row) {\n                System.out.print(element + \"\t\");\n            }\n            System.out.println(); // Move to the next line for the next row\n        }\n    }\n}\n\n",
        "output": "Enter the number of rows for the first matrix: 2\nEnter the number of columns for the first matrix: 2\nEnter the elements of the first matrix:\nEnter element at position (1,1): 6\nEnter element at position (1,2): 5\nEnter element at position (2,1): 3\nEnter element at position (2,2): 1\nEnter the number of rows for the second matrix: 2\nEnter the number of columns for the second matrix: 2\nEnter the elements of the second matrix:\nEnter element at position (1,1): 6\nEnter element at position (1,2): 3\nEnter element at position (2,1): 4\nEnter element at position (2,2): 6\nProduct of the matrices:\n56      48\n22      15"
    },
    {
        "type": "2dArray",
        "index": "2darr4",
        "pnumber": "4",
        "programName": "Program to subtract the two matrices",
        "code": "<span class='colorGreen'>// Program to subtract the two matrices</span>\nimport java.util.Scanner;\n\npublic class program4 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the dimensions of the matrices\n        System.out.print(\"Enter the number of rows: \");\n        int rows = scanner.nextInt();\n\n        System.out.print(\"Enter the number of columns: \");\n        int columns = scanner.nextInt();\n\n        // Input the elements of the first matrix\n        int[][] matrix1 = inputMatrix(\"first\", rows, columns, scanner);\n\n        // Input the elements of the second matrix\n        int[][] matrix2 = inputMatrix(\"second\", rows, columns, scanner);\n\n        // Subtract the matrices\n        int[][] differenceMatrix = subtractMatrices(matrix1, matrix2);\n\n        // Print the result matrix\n        System.out.println(\"Difference of the matrices:\");\n        printMatrix(differenceMatrix);\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static int[][] inputMatrix(String ordinal, int rows, int columns, Scanner scanner) {\n        System.out.println(\"Enter the elements of the \" + ordinal + \" matrix:\");\n\n        int[][] matrix = new int[rows][columns];\n\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < columns; j++) {\n                System.out.print(\"Enter element at position (\" + (i + 1) + \",\" + (j + 1) + \"): \");\n                matrix[i][j] = scanner.nextInt();\n            }\n        }\n\n        return matrix;\n    }\n\n    public static int[][] subtractMatrices(int[][] matrix1, int[][] matrix2) {\n        int rows = matrix1.length;\n        int columns = matrix1[0].length;\n\n        int[][] differenceMatrix = new int[rows][columns];\n\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < columns; j++) {\n                differenceMatrix[i][j] = matrix1[i][j] - matrix2[i][j];\n            }\n        }\n\n        return differenceMatrix;\n    }\n\n    public static void printMatrix(int[][] matrix) {\n        for (int[] row : matrix) {\n            for (int element : row) {\n                System.out.print(element + \"\t\");\n            }\n            System.out.println(); // Move to the next line for the next row\n        }\n    }\n}\n",
        "output": "Enter the number of rows: 2\n        Enter the number of columns: 2\n        Enter the elements of the first matrix:\n        Enter element at position (1,1): 5\n        Enter element at position (1,2): 6\n        Enter element at position (2,1): 3\n        Enter element at position (2,2): 4\n        Enter the elements of the second matrix:\n        Enter element at position (1,1): 2\n        Enter element at position (1,2): 6\n        Enter element at position (2,1): 4\n        Enter element at position (2,2): 8\n        Difference of the matrices:\n        3       0\n        -1      -4"
    },
    {
        "type": "2dArray",
        "index": "2darr5",
        "pnumber": "5",
        "programName": "Program to determine whether two matrices are equal",
        "code": "<span class='colorGreen'>// Program to determine whether two matrices are equal</span>\nimport java.util.Scanner;\n\npublic class program5 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the dimensions of the matrices\n        System.out.print(\"Enter the number of rows: \");\n        int rows = scanner.nextInt();\n\n        System.out.print(\"Enter the number of columns: \");\n        int columns = scanner.nextInt();\n\n        // Input the elements of the first matrix\n        int[][] matrix1 = inputMatrix(\"first\", rows, columns, scanner);\n\n        // Input the elements of the second matrix\n        int[][] matrix2 = inputMatrix(\"second\", rows, columns, scanner);\n\n        // Check if the matrices are equal\n        boolean areEqual = areMatricesEqual(matrix1, matrix2);\n\n        // Print the result\n        if (areEqual) {\n            System.out.println(\"The matrices are equal.\");\n        } else {\n            System.out.println(\"The matrices are not equal.\");\n        }\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static int[][] inputMatrix(String ordinal, int rows, int columns, Scanner scanner) {\n        System.out.println(\"Enter the elements of the \" + ordinal + \" matrix:\");\n\n        int[][] matrix = new int[rows][columns];\n\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < columns; j++) {\n                System.out.print(\"Enter element at position (\" + (i + 1) + \",\" + (j + 1) + \"): \");\n                matrix[i][j] = scanner.nextInt();\n            }\n        }\n\n        return matrix;\n    }\n\n    public static boolean areMatricesEqual(int[][] matrix1, int[][] matrix2) {\n        int rows = matrix1.length;\n        int columns = matrix1[0].length;\n\n        if (matrix2.length != rows || matrix2[0].length != columns) {\n            return false; // Matrices have different dimensions\n        }\n\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < columns; j++) {\n                if (matrix1[i][j] != matrix2[i][j]) {\n                    return false; // Matrices have different elements\n                }\n            }\n        }\n\n        return true; // Matrices are equal\n    }\n}\n",
        "output": "Enter the number of rows: 2\nEnter the number of columns: 2\nEnter the elements of the first matrix:\nEnter element at position (1,1): 6\nEnter element at position (1,2): \n56\nEnter element at position (2,1): 3\nEnter element at position (2,2): 4\nEnter the elements of the second matrix:\nEnter element at position (1,1): 2\nEnter element at position (1,2): 5\nEnter element at position (2,1): 8\nEnter element at position (2,2): 1\nThe matrices are not equal.\n"
    },
    {
        "type": "2dArray",
        "index": "2darr6",
        "pnumber": "6",
        "programName": "Program to display the lower triangular matrix",
        "code": "<span class='colorGreen'>// Program to display the lower triangular matrix</span>\nimport java.util.Scanner;\n\npublic class program6 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the size of the square matrix\n        System.out.print(\"Enter the size of the square matrix: \");\n        int size = scanner.nextInt();\n\n        // Input the elements of the square matrix\n        int[][] matrix = inputSquareMatrix(size, scanner);\n\n        // Display the lower triangular matrix\n        System.out.println(\"Lower Triangular Matrix:\");\n        displayLowerTriangularMatrix(matrix);\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static int[][] inputSquareMatrix(int size, Scanner scanner) {\n        System.out.println(\"Enter the elements of the square matrix:\");\n\n        int[][] matrix = new int[size][size];\n\n        for (int i = 0; i < size; i++) {\n            for (int j = 0; j < size; j++) {\n                System.out.print(\"Enter element at position (\" + (i + 1) + \",\" + (j + 1) + \"): \");\n                matrix[i][j] = scanner.nextInt();\n            }\n        }\n\n        return matrix;\n    }\n\n    public static void displayLowerTriangularMatrix(int[][] matrix) {\n        int size = matrix.length;\n\n        for (int i = 0; i < size; i++) {\n            for (int j = 0; j < size; j++) {\n                if (j <= i) {\n                    System.out.print(matrix[i][j] + \"\t\");\n                } else {\n                    System.out.print(\"0\t\"); // Print 0 for elements above the main diagonal\n                }\n            }\n            System.out.println(); // Move to the next line for the next row\n        }\n    }\n}\n",
        "output": "Enter the size of the square matrix: 3\nEnter the elements of the square matrix:\nEnter element at position (1,1): 2\nEnter element at position (1,2): 5\nEnter element at position (1,3): 6\nEnter element at position (2,1): 8\nEnter element at position (2,2): 4\nEnter element at position (2,3): 2\nEnter element at position (3,1): 0\nEnter element at position (3,2): 4\nEnter element at position (3,3): 5\nLower Triangular Matrix:\n2       0       0\n8       4       0\n0       4       5\n"
    },
    {
        "type": "2dArray",
        "index": "2darr7",
        "pnumber": "7",
        "programName": "Program to display the upper triangular matrix",
        "code": "<span class='colorGreen'>// Program to display the upper triangular matrix</span>\nimport java.util.Scanner;\n\npublic class UpperTriangularMatrix {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the size of the square matrix\n        System.out.print(\"Enter the size of the square matrix: \");\n        int size = scanner.nextInt();\n\n        // Input the elements of the square matrix\n        int[][] matrix = inputSquareMatrix(size, scanner);\n\n        // Display the upper triangular matrix\n        System.out.println(\"Upper Triangular Matrix:\");\n        displayUpperTriangularMatrix(matrix);\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static int[][] inputSquareMatrix(int size, Scanner scanner) {\n        System.out.println(\"Enter the elements of the square matrix:\");\n\n        int[][] matrix = new int[size][size];\n\n        for (int i = 0; i < size; i++) {\n            for (int j = 0; j < size; j++) {\n                System.out.print(\"Enter element at position (\" + (i + 1) + \",\" + (j + 1) + \"): \");\n                matrix[i][j] = scanner.nextInt();\n            }\n        }\n\n        return matrix;\n    }\n\n    public static void displayUpperTriangularMatrix(int[][] matrix) {\n        int size = matrix.length;\n\n        for (int i = 0; i < size; i++) {\n            for (int j = 0; j < size; j++) {\n                if (j >= i) {\n                    System.out.print(matrix[i][j] + \"\t\");\n                } else {\n                    System.out.print(\"0\t\"); // Print 0 for elements below the main diagonal\n                }\n            }\n            System.out.println(); // Move to the next line for the next row\n        }\n    }\n}\n",
        "output": "Enter the size of the square matrix: 4\nEnter the elements of the square matrix:\nEnter element at position (1,1): 2\nEnter element at position (1,2): 6\nEnter element at position (1,3): 5\nEnter element at position (1,4): 3\nEnter element at position (2,1): 4\nEnter element at position (2,2): 1\nEnter element at position (2,3): 2\nEnter element at position (2,4): 3\nEnter element at position (3,1): 5\nEnter element at position (3,2): 6\nEnter element at position (3,3): 77\nEnter element at position (3,4): 8\nEnter element at position (4,1): 10\nEnter element at position (4,2): 25\nEnter element at position (4,3): 3\nEnter element at position (4,4): 5\nUpper Triangular Matrix:\n2       6       5       3\n0       1       2       3\n0       0       77      8\n0       0       0       5\n"
    },
    {
        "type": "2dArray",
        "index": "2darr8",
        "pnumber": "8",
        "programName": "Program to find the frequency of odd & even numbers in the given matrix",
        "code": "<span class='colorGreen'>// Program to find the frequency of odd & even numbers in the given matrix</span>\nimport java.util.Scanner;\n\npublic class program8 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the size of the matrix\n        System.out.print(\"Enter the number of rows: \");\n        int rows = scanner.nextInt();\n\n        System.out.print(\"Enter the number of columns: \");\n        int columns = scanner.nextInt();\n\n        // Input the elements of the matrix\n        int[][] matrix = inputMatrix(rows, columns, scanner);\n\n        // Calculate and display the frequency of odd and even numbers\n        int oddFrequency = 0;\n        int evenFrequency = 0;\n\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < columns; j++) {\n                if (matrix[i][j] % 2 == 0) {\n                    evenFrequency++;\n                } else {\n                    oddFrequency++;\n                }\n            }\n        }\n\n        System.out.println(\"Frequency of odd numbers: \" + oddFrequency);\n        System.out.println(\"Frequency of even numbers: \" + evenFrequency);\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static int[][] inputMatrix(int rows, int columns, Scanner scanner) {\n        System.out.println(\"Enter the elements of the matrix:\");\n\n        int[][] matrix = new int[rows][columns];\n\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < columns; j++) {\n                System.out.print(\"Enter element at position (\" + (i + 1) + \",\" + (j + 1) + \"): \");\n                matrix[i][j] = scanner.nextInt();\n            }\n        }\n\n        return matrix;\n    }\n}\n",
        "output": "Enter the number of rows: 2\n        Enter the number of columns: 3\n        Enter the elements of the matrix:\n        Enter element at position (1,1): 15\n        Enter element at position (1,2): 2\n        Enter element at position (1,3): 6\n        Enter element at position (2,1): 48\n        Enter element at position (2,2): 30\n        Enter element at position (2,3): 12\n        Frequency of odd numbers: 1\n        Frequency of even numbers: 5"
    },
    {
        "type": "2dArray",
        "index": "2darr9",
        "pnumber": "9",
        "programName": "Program to find the sum of each row and each column of a matrix",
        "code": "<span class='colorGreen'>// Program to find the sum of each row and each column of a matrix</span>\nimport java.util.Scanner;\n\npublic class program9 {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Input the size of the matrix\n        System.out.print(\"Enter the number of rows: \");\n        int rows = scanner.nextInt();\n\n        System.out.print(\"Enter the number of columns: \");\n        int columns = scanner.nextInt();\n\n        // Input the elements of the matrix\n        int[][] matrix = inputMatrix(rows, columns, scanner);\n\n        // Calculate and display the sum of each row\n        System.out.println(\"Sum of each row:\");\n\n        for (int i = 0; i < rows; i++) {\n            int rowSum = 0;\n            for (int j = 0; j < columns; j++) {\n                rowSum += matrix[i][j];\n            }\n            System.out.println(\"Row \" + (i + 1) + \": \" + rowSum);\n        }\n\n        // Calculate and display the sum of each column\n        System.out.println(\"Sum of each column:\");\n\n        for (int j = 0; j < columns; j++) {\n            int columnSum = 0;\n            for (int i = 0; i < rows; i++) {\n                columnSum += matrix[i][j];\n            }\n            System.out.println(\"Column \" + (j + 1) + \": \" + columnSum);\n        }\n\n        // Close the scanner\n        scanner.close();\n    }\n\n    public static int[][] inputMatrix(int rows, int columns, Scanner scanner) {\n        System.out.println(\"Enter the elements of the matrix:\");\n\n        int[][] matrix = new int[rows][columns];\n\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < columns; j++) {\n                System.out.print(\"Enter element at position (\" + (i + 1) + \",\" + (j + 1) + \"): \");\n                matrix[i][j] = scanner.nextInt();\n            }\n        }\n\n        return matrix;\n    }\n}\n",
        "output": "Enter the number of rows: 2\nEnter the number of columns: 3\nEnter the elements of the matrix:\nEnter element at position (1,1): 5\nEnter element at position (1,2): 6\nEnter element at position (1,3): 42\nEnter element at position (2,1): 01\nEnter element at position (2,2): 23\nEnter element at position (2,3): 6\nSum of each row:\nRow 1: 53\nRow 2: 30\nSum of each column:\nColumn 1: 6\nColumn 2: 29\nColumn 3: 48"
    },
    {
        "type": "2dArray",
        "index": "2darr10",
        "pnumber": "10",
        "programName": "Program to find the transpose of a given matrix",
        "code": "<span class='colorGreen'>// Program to find the transpose of a given matrix</span>\npublic class program10 {\n\n    public static void main(String[] args) {\n        // Assume a 3x3 matrix for demonstration\n        int[][] matrix = {\n                {1, 2, 3},\n                {4, 5, 6},\n                {7, 8, 9}\n        };\n\n        // Print the original matrix\n        System.out.println(\"Original Matrix:\");\n        printMatrix(matrix);\n\n        // Calculate and display the transpose of the matrix\n        int[][] transposeMatrix = transpose(matrix);\n\n        System.out.println(\"Transpose Matrix:\");\n        printMatrix(transposeMatrix);\n    }\n\n    public static int[][] transpose(int[][] matrix) {\n        int rows = matrix.length;\n        int columns = matrix[0].length;\n\n        int[][] transposeMatrix = new int[columns][rows];\n\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < columns; j++) {\n                transposeMatrix[j][i] = matrix[i][j];\n            }\n        }\n\n        return transposeMatrix;\n    }\n\n    public static void printMatrix(int[][] matrix) {\n        for (int[] row : matrix) {\n            for (int element : row) {\n                System.out.print(element + \"\t\");\n            }\n            System.out.println(); // Move to the next line for the next row\n        }\n    }\n}\n",
        "output": "Original Matrix:\n1       2       3\n4       5       6\n7       8       9\nTranspose Matrix:\n1       4       7\n2       5       8\n3       6       9\n"
    },
    {
        "type": "2dArray",
        "index": "2darr11",
        "pnumber": "11",
        "programName": "Program to determine whether a given matrix is an identity matrix",
        "code": "<span class='colorGreen'>// Program to determine whether a given matrix is an identity matrix</span>\npublic class IdentityMatrixChecker {\n    public static void main(String[] args) {\n        int[][] matrix = {\n            {1, 0, 0},\n            {0, 1, 0},\n            {0, 0, 1}\n        };\n\n        if (isIdentityMatrix(matrix)) {\n            System.out.println(\"The matrix is an identity matrix.\");\n        } else {\n            System.out.println(\"The matrix is not an identity matrix.\");\n        }\n    }\n\n    public static boolean isIdentityMatrix(int[][] matrix) {\n        int rows = matrix.length;\n        int cols = (rows > 0) ? matrix[0].length : 0;\n\n        // Check if the matrix is square\n        if (rows != cols) {\n            return false;\n        }\n\n        // Check diagonal elements\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < cols; j++) {\n                if (i == j && matrix[i][j] != 1) {\n                    return false;\n                } else if (i != j && matrix[i][j] != 0) {\n                    return false;\n                }\n            }\n        }\n\n        // If all conditions are satisfied, the matrix is an identity matrix\n        return true;\n    }\n}\n\n",
        "output": "The matrix is an identity matrix."
    },
    {
        "type": "2dArray",
        "index": "2darr12",
        "pnumber": "12",
        "programName": "Program to determine whether a given matrix is a sparse matrix",
        "code": "<span class='colorGreen'>// Program to determine whether a given matrix is a sparse matrix</span>\npublic class program13 {\n\n    public static void main(String[] args) {\n        // Assume a 3x3 matrix for demonstration\n        int[][] matrix = {\n                {1, 0, 0},\n                {0, 0, 0},\n                {0, 0, 2}\n        };\n\n        // Print the matrix\n        System.out.println(\"Given Matrix:\");\n        printMatrix(matrix);\n\n        // Check if the matrix is a sparse matrix\n        boolean isSparse = isSparseMatrix(matrix);\n\n        // Print the result\n        if (isSparse) {\n            System.out.println(\"The given matrix is a sparse matrix.\");\n        } else {\n            System.out.println(\"The given matrix is not a sparse matrix.\");\n        }\n    }\n\n    public static boolean isSparseMatrix(int[][] matrix) {\n        int rows = matrix.length;\n        int columns = matrix[0].length;\n\n        int zeroCount = 0;\n        int nonZeroCount = 0;\n\n        // Count the number of zeros and non-zeros\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < columns; j++) {\n                if (matrix[i][j] == 0) {\n                    zeroCount++;\n                } else {\n                    nonZeroCount++;\n                }\n            }\n        }\n\n        // Check if the matrix is sparse based on the number of zeros\n        return zeroCount > nonZeroCount;\n    }\n\n    public static void printMatrix(int[][] matrix) {\n        for (int[] row : matrix) {\n            for (int element : row) {\n                System.out.print(element + \"\t\");\n            }\n            System.out.println(); // Move to the next line for the next row\n        }\n    }\n}\n",
        "output": "Given Matrix:\n1       0       0\n0       0       0\n0       0       2\nThe given matrix is a sparse matrix.\n"
    }
    ,

    //delegation event handling
    {
        "type": "delegationEventModel",
        "index": "deleEventM1",
        "pnumber": "1",
        "programName": "Java Program to Display Some Text in the Frame using Labels",
        "code": "<span class='colorGreen'>// Java Program to Display Some Text in the Frame using Labels</span>\nimport java.awt.Frame;\nimport java.awt.Label;\nimport java.awt.Color;\nimport java.awt.FlowLayout;\nimport java.awt.event.WindowAdapter;\nimport java.awt.event.WindowEvent;\n\npublic class program1 {\n    public static void main(String[] args) {\n        // Create a frame\n        Frame frame = new Frame(\"Text in Frame Example\");\n\n        // Create a label with the desired text\n        Label label = new Label(\"Hello, this is some text!\");\n\n        // Set layout manager to FlowLayout for automatic positioning\n        frame.setLayout(new FlowLayout());\n\n        // Add a background color to the label for better visibility\n        label.setBackground(Color.LIGHT_GRAY);\n        label.setForeground(Color.BLACK);\n\n        // Add the label to the frame\n        frame.add(label);\n\n        // Set frame properties\n        frame.setSize(400, 200); // Increased width and height\n        frame.setVisible(true);  // Make the frame visible\n\n        // Add a window listener to handle the close event\n        frame.addWindowListener(new WindowAdapter() {\n            @Override\n            public void windowClosing(WindowEvent e) {\n                System.exit(0); // Terminate the program when the frame is closed\n            }\n        });\n    }\n}\n",
        "output": "<img src='./java_images/dele1.jpeg'>"
    },
    {
        "type": "delegationEventModel",
        "index": "deleEventM2",
        "pnumber": "2",
        "programName": "Java Program to Create Text Area and Password Field",
        "code": "<span class='colorGreen'>// Java Program to Create Text Area and Password Field</span>\nimport java.awt.Frame;\nimport java.awt.TextArea;\nimport java.awt.TextField;\nimport java.awt.event.WindowAdapter;\nimport java.awt.event.WindowEvent;\n\npublic class program2 {\n    public static void main(String[] args) {\n        // Create a frame\n        Frame frame = new Frame(\"Text Area and Password Field Example\");\n\n        // Create a TextArea\n        TextArea textArea = new TextArea(\"This is a TextArea\", 5, 30);\n\n        // Create a PasswordField\n        TextField passwordField = new TextField(\"Password\", 20);\n        passwordField.setEchoChar('*'); // Set echo character for the password field\n\n        // Set the positions of components within the frame\n        textArea.setBounds(20, 40, 350, 100);\n        passwordField.setBounds(20, 160, 150, 20);\n\n        // Add components to the frame\n        frame.add(textArea);\n        frame.add(passwordField);\n\n        // Set frame properties\n        frame.setLayout(null); // Set layout manager to null for absolute positioning\n        frame.setSize(400, 250);\n        frame.setVisible(true);\n\n        // Add a window listener to handle the close event\n        frame.addWindowListener(new WindowAdapter() {\n            @Override\n            public void windowClosing(WindowEvent e) {\n                System.exit(0); // Terminate the program when the frame is closed\n            }\n        });\n    }\n}\n",
        "output": "<img src='./java_images/dele2.jpeg'>"
    },
    {
        "type": "delegationEventModel",
        "index": "deleEventM3",
        "pnumber": "3",
        "programName": "Java Program to Create a Button and Display Image in the Frame when Clicked",
        "code": "<span class='colorGreen'>// Java Program to Create a Button and Display Image in the Frame when Clicked</span>\nimport java.awt.Button;\nimport java.awt.Canvas;\nimport java.awt.Frame;\nimport java.awt.Graphics;\nimport java.awt.Image;\nimport java.awt.event.ActionEvent;\nimport java.awt.event.ActionListener;\nimport java.awt.event.WindowAdapter;\nimport java.awt.event.WindowEvent;\nimport java.awt.image.BufferedImage;\nimport java.io.File;\nimport java.io.IOException;\nimport javax.imageio.ImageIO;\n\npublic class program3 {\n    public static void main(String[] args) {\n        // Create a frame\n        Frame frame = new Frame(\"Button and Image Example\");\n\n        // Create a button\n        Button button = new Button(\"Click me\");\n\n        // Create a canvas to display the image\n        ImageCanvas imageCanvas = new ImageCanvas();\n\n        // Add components to the frame\n        frame.add(button);\n        frame.add(imageCanvas);\n\n        // Set the positions of components within the frame\n        button.setBounds(20, 40, 80, 30);\n        imageCanvas.setBounds(120, 40, 200, 150);\n\n        // Add action listener to the button\n        button.addActionListener(new ActionListener() {\n            @Override\n            public void actionPerformed(ActionEvent e) {\n                // Load the image and set it for the canvas when the button is clicked\n                BufferedImage image = loadImage(\"Frame 2.jpg\");\n                imageCanvas.setImage(image);\n            }\n        });\n\n        // Set frame properties\n        frame.setLayout(null); // Set layout manager to null for absolute positioning\n        frame.setSize(400, 250);\n        frame.setVisible(true);\n\n        // Add a window listener to handle the close event\n        frame.addWindowListener(new WindowAdapter() {\n            @Override\n            public void windowClosing(WindowEvent e) {\n                System.exit(0); // Terminate the program when the frame is closed\n            }\n        });\n    }\n\n    // Load an image from file\n    private static BufferedImage loadImage(String filePath) {\n        try {\n            return ImageIO.read(new File(filePath));\n        } catch (IOException e) {\n            e.printStackTrace();\n            return null;\n        }\n    }\n}\n\n// Custom Canvas class to display images\nclass ImageCanvas extends Canvas {\n    private Image image;\n\n    public void setImage(Image image) {\n        this.image = image;\n        repaint(); // Trigger repaint to update the displayed image\n    }\n\n    @Override\n    public void paint(Graphics g) {\n        super.paint(g);\n        if (image != null) {\n            g.drawImage(image, 0, 0, getWidth(), getHeight(), this);\n        }\n    }\n}\n",
        "output": "<img src='./java_images/dele3.jpeg'>"
    },
    {
        "type": "delegationEventModel",
        "index": "deleEventM4",
        "pnumber": "4",
        "programName": "Java Program to Create 2 Radio Buttons and Display Selected Button Label",
        "code": "<span class='colorGreen'>// Java Program to Create 2 Radio Buttons and Display Selected Button Label</span>\nimport java.awt.Frame;\nimport java.awt.Label;\nimport java.awt.Checkbox;\nimport java.awt.CheckboxGroup;\nimport java.awt.event.ItemEvent;\nimport java.awt.event.ItemListener;\nimport java.awt.event.WindowAdapter;\nimport java.awt.event.WindowEvent;\n\npublic class program4 {\n    public static void main(String[] args) {\n        // Create a frame\n        Frame frame = new Frame(\"Radio Button Example\");\n\n        // Create a label to display the selected button label\n        Label resultLabel = new Label(\"Selected Button: \");\n\n        // Create a CheckboxGroup to group the radio buttons\n        CheckboxGroup checkboxGroup = new CheckboxGroup();\n\n        // Create the first radio button\n        Checkbox radioButton1 = new Checkbox(\"Option 1\", checkboxGroup, false);\n\n        // Create the second radio button\n        Checkbox radioButton2 = new Checkbox(\"Option 2\", checkboxGroup, false);\n\n        // Add components to the frame\n        frame.add(resultLabel);\n        frame.add(radioButton1);\n        frame.add(radioButton2);\n\n        // Set the positions of components within the frame\n        resultLabel.setBounds(20, 40, 200, 30);\n        radioButton1.setBounds(20, 80, 100, 30);\n        radioButton2.setBounds(20, 120, 100, 30);\n\n        // Add item listener to the radio buttons\n        ItemListener itemListener = new ItemListener() {\n            @Override\n            public void itemStateChanged(ItemEvent e) {\n                Checkbox selectedCheckbox = checkboxGroup.getSelectedCheckbox();\n                resultLabel.setText(\"Selected Button: \" + selectedCheckbox.getLabel());\n            }\n        };\n\n        radioButton1.addItemListener(itemListener);\n        radioButton2.addItemListener(itemListener);\n\n        // Set frame properties\n        frame.setLayout(null); // Set layout manager to null for absolute positioning\n        frame.setSize(300, 200);\n        frame.setVisible(true);\n\n        // Add a window listener to handle the close event\n        frame.addWindowListener(new WindowAdapter() {\n            @Override\n            public void windowClosing(WindowEvent e) {\n                System.exit(0); // Terminate the program when the frame is closed\n            }\n        });\n    }\n}\n",
        "output": "<img src='./java_images/dele4.jpeg'>"
    },
    {
        "type": "delegationEventModel",
        "index": "deleEventM5",
        "pnumber": "5",
        "programName": "Java Program to Handle KeyBoardEvent",
        "code": "<span class='colorGreen'>// Java Program to Handle KeyBoardEvent</span>\nimport java.awt.Frame;\nimport java.awt.Label;\nimport java.awt.event.KeyEvent;\nimport java.awt.event.KeyListener;\nimport java.awt.event.WindowAdapter;\nimport java.awt.event.WindowEvent;\n\npublic class program5 {\n    public static void main(String[] args) {\n        // Create a frame\n        Frame frame = new Frame(\"Keyboard Event Example\");\n\n        // Create a label to display pressed key\n        Label keyLabel = new Label(\"Pressed Key: \");\n\n        // Add components to the frame\n        frame.add(keyLabel);\n\n        // Set the positions of components within the frame\n        keyLabel.setBounds(20, 40, 200, 30);\n\n        // Add key listener to the frame\n        frame.addKeyListener(new KeyListener() {\n            @Override\n            public void keyTyped(KeyEvent e) {\n                // This method is called when a key is typed (pressed and released).\n                // Note: char result is undefined for some key types, such as function keys.\n                char pressedKey = e.getKeyChar();\n                keyLabel.setText(\"Pressed Key: \" + pressedKey);\n            }\n\n            @Override\n            public void keyPressed(KeyEvent e) {\n                // This method is called when a key is pressed down.\n            }\n\n            @Override\n            public void keyReleased(KeyEvent e) {\n                // This method is called when a key is released.\n            }\n        });\n\n        // Set frame properties\n        frame.setLayout(null); // Set layout manager to null for absolute positioning\n        frame.setSize(300, 200);\n        frame.setVisible(true);\n\n        // Add a window listener to handle the close event\n        frame.addWindowListener(new WindowAdapter() {\n            @Override\n            public void windowClosing(WindowEvent e) {\n                System.exit(0); // Terminate the program when the frame is closed\n            }\n        });\n\n        // Set focus to the frame to receive keyboard events\n        frame.setFocusable(true);\n        frame.requestFocus();\n    }\n}\n",
        "output": "<img src='./java_images/dele5.jpeg'>"
    },
    {
        "type": "delegationEventModel",
        "index": "deleEventM6",
        "pnumber": "6",
        "programName": "Java Program to Handle MouseEvent",
        "code": "<span class='colorGreen'>// Java Program to Handle MouseEvent</span>\nimport java.awt.Frame;\nimport java.awt.Label;\nimport java.awt.event.MouseEvent;\nimport java.awt.event.MouseListener;\nimport java.awt.event.WindowAdapter;\nimport java.awt.event.WindowEvent;\n\npublic class program6 {\n    public static void main(String[] args) {\n        // Create a frame\n        Frame frame = new Frame(\"Mouse Event Example\");\n\n        // Create a label to display mouse event information\n        Label mouseLabel = new Label(\"Mouse Event: \");\n\n        // Add components to the frame\n        frame.add(mouseLabel);\n\n        // Set the positions of components within the frame\n        mouseLabel.setBounds(20, 40, 200, 30);\n\n        // Add mouse listener to the frame\n        frame.addMouseListener(new MouseListener() {\n            @Override\n            public void mouseClicked(MouseEvent e) {\n                mouseLabel.setText(\"Mouse Event: Clicked at (\" + e.getX() + \", \" + e.getY() + \")\");\n            }\n\n            @Override\n            public void mousePressed(MouseEvent e) {\n                mouseLabel.setText(\"Mouse Event: Pressed at (\" + e.getX() + \", \" + e.getY() + \")\");\n            }\n\n            @Override\n            public void mouseReleased(MouseEvent e) {\n                mouseLabel.setText(\"Mouse Event: Released at (\" + e.getX() + \", \" + e.getY() + \")\");\n            }\n\n            @Override\n            public void mouseEntered(MouseEvent e) {\n                mouseLabel.setText(\"Mouse Event: Entered at (\" + e.getX() + \", \" + e.getY() + \")\");\n            }\n\n            @Override\n            public void mouseExited(MouseEvent e) {\n                mouseLabel.setText(\"Mouse Event: Exited at (\" + e.getX() + \", \" + e.getY() + \")\");\n            }\n        });\n\n        // Set frame properties\n        frame.setLayout(null); // Set layout manager to null for absolute positioning\n        frame.setSize(300, 200);\n        frame.setVisible(true);\n\n        // Add a window listener to handle the close event\n        frame.addWindowListener(new WindowAdapter() {\n            @Override\n            public void windowClosing(WindowEvent e) {\n                System.exit(0); // Terminate the program when the frame is closed\n            }\n        });\n    }\n}\n",
        "output": "<img src='./java_images/dele6.jpeg'>"
    },
    {
        "type": "delegationEventModel",
        "index": "deleEventM7",
        "pnumber": "7",
        "programName": "Java Program to Get and Set State and Get Label of a Check Box",
        "code": "<span class='colorGreen'>// Java Program to Get and Set State and Get Label of a Check Box</span>\nimport java.awt.Checkbox;\nimport java.awt.Frame;\nimport java.awt.Label;\nimport java.awt.event.ItemEvent;\nimport java.awt.event.ItemListener;\nimport java.awt.event.WindowAdapter;\nimport java.awt.event.WindowEvent;\n\npublic class program7 {\n    public static void main(String[] args) {\n        // Create a frame\n        Frame frame = new Frame(\"Checkbox Example\");\n\n        // Create a label to display checkbox information\n        Label checkboxLabel = new Label(\"Checkbox State: \");\n\n        // Create a checkbox\n        Checkbox checkbox = new Checkbox(\"Check me\");\n\n        // Add components to the frame\n        frame.add(checkboxLabel);\n        frame.add(checkbox);\n\n        // Set the positions of components within the frame\n        checkboxLabel.setBounds(20, 40, 200, 30);\n        checkbox.setBounds(20, 80, 100, 30);\n\n        // Add item listener to the checkbox\n        checkbox.addItemListener(new ItemListener() {\n            @Override\n            public void itemStateChanged(ItemEvent e) {\n                // Get the state and label of the checkbox when its state changes\n                boolean isChecked = checkbox.getState();\n                String label = checkbox.getLabel();\n                checkboxLabel.setText(\"Checkbox State: \" + (isChecked ? \"Checked\" : \"Unchecked\") + \", Label: \" + label);\n            }\n        });\n\n        // Set frame properties\n        frame.setLayout(null); // Set layout manager to null for absolute positioning\n        frame.setSize(300, 200);\n        frame.setVisible(true);\n\n        // Add a window listener to handle the close event\n        frame.addWindowListener(new WindowAdapter() {\n            @Override\n            public void windowClosing(WindowEvent e) {\n                System.exit(0); // Terminate the program when the frame is closed\n            }\n        });\n    }\n}\n",
        "output": "<img src='./java_images/dele7.jpeg'>"
    },
    {
        "type": "delegationEventModel",
        "index": "deleEventM8",
        "pnumber": "8",
        "programName": "Java Program to Create Check Boxes and Radio Buttons",
        "code": "<span class='colorGreen'>// Java Program to Create Check Boxes and Radio Buttons</span>\nimport java.awt.Button;\nimport java.awt.Frame;\nimport java.awt.event.ActionEvent;\nimport java.awt.event.ActionListener;\nimport java.awt.event.WindowAdapter;\nimport java.awt.event.WindowEvent;\n\npublic class program9 {\n    public static void main(String[] args) {\n        // Create the main frame\n        Frame mainFrame = new Frame(\"Frame Switch Example\");\n\n        // Create a button to switch to Frame 2\n        Button switchToFrame2Button = new Button(\"Switch to Frame 2\");\n\n        // Add components to the main frame\n        mainFrame.add(switchToFrame2Button);\n\n        // Set the positions of components within the main frame\n        switchToFrame2Button.setBounds(20, 40, 150, 30);\n\n        // Add action listener to the button to switch frames\n        switchToFrame2Button.addActionListener(new ActionListener() {\n            @Override\n            public void actionPerformed(ActionEvent e) {\n                // Create and display Frame 2\n                createAndShowFrame2();\n            }\n        });\n\n        // Set main frame properties\n        mainFrame.setLayout(null); // Set layout manager to null for absolute positioning\n        mainFrame.setSize(200, 150);\n        mainFrame.setVisible(true);\n\n        // Add a window listener to handle the close event\n        mainFrame.addWindowListener(new WindowAdapter() {\n            @Override\n            public void windowClosing(WindowEvent e) {\n                System.exit(0); // Terminate the program when the main frame is closed\n            }\n        });\n    }\n\n    // Function to create and show Frame 2\n    private static void createAndShowFrame2() {\n        // Create Frame 2\n        Frame frame2 = new Frame(\"Frame 2\");\n\n        // Create a button to switch back to the main frame\n        Button switchToMainFrameButton = new Button(\"Switch to Main Frame\");\n\n        // Add components to Frame 2\n        frame2.add(switchToMainFrameButton);\n\n        // Set the positions of components within Frame 2\n        switchToMainFrameButton.setBounds(20, 40, 150, 30);\n\n        // Add action listener to the button to switch back to the main frame\n        switchToMainFrameButton.addActionListener(new ActionListener() {\n            @Override\n            public void actionPerformed(ActionEvent e) {\n                frame2.dispose(); // Close Frame 2\n            }\n        });\n\n        // Set Frame 2 properties\n        frame2.setLayout(null); // Set layout manager to null for absolute positioning\n        frame2.setSize(200, 150);\n        frame2.setVisible(true);\n\n        // Add a window listener to handle the close event\n        frame2.addWindowListener(new WindowAdapter() {\n            @Override\n            public void windowClosing(WindowEvent e) {\n                frame2.dispose(); // Close Frame 2\n            }\n        });\n    }\n}\n",
        "output": "<img src='./java_images/dele8.jpeg'>"
    },
    {
        "type": "delegationEventModel",
        "index": "deleEventM9",
        "pnumber": "9",
        "programName": "Java Program to Create and Switch between Frames using Buttons",
        "code": "<span class='colorGreen'>// Java Program to Create and Switch between Frames using Buttons</span>\n",
        "output": "<img src='./java_images/dele9.jpeg'>"
    },
    {
        "type": "delegationEventModel",
        "index": "deleEventM10",
        "pnumber": "10",
        "programName": "Java Program to Create a List Box to Select Multiple Items and Display it in the Frame",
        "code": "<span class='colorGreen'>// Java Program to Create a List Box to Select Multiple Items and Display it in the Frame</span>\nimport javax.swing.JButton;\nimport javax.swing.JFrame;\nimport java.awt.Color;\nimport java.awt.Font;\nimport java.awt.event.ActionEvent;\nimport java.awt.event.ActionListener;\n\npublic class program10 {\n    public static void main(String[] args) {\n        // Create a frame\n        JFrame frame = new JFrame(\"Button with Border Example\");\n\n        // Create buttons with borders\n        JButton button1 = createStyledButton(\"Button 1\");\n        JButton button2 = createStyledButton(\"Button 2\");\n\n        // Add components to the frame\n        frame.add(button1);\n        frame.add(button2);\n\n        // Set the layout manager (FlowLayout by default for JFrame)\n        frame.setLayout(null);\n\n        // Set the positions of components within the frame\n        button1.setBounds(20, 40, 120, 40);\n        button2.setBounds(20, 100, 120, 40);\n\n        // Set frame properties\n        frame.setSize(180, 180);\n        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n        frame.setVisible(true);\n    }\n\n    // Function to create a styled button with a border\n    private static JButton createStyledButton(String label) {\n        JButton button = new JButton(label);\n\n        // Set background and foreground color\n        button.setBackground(Color.lightGray);\n        button.setForeground(Color.black);\n\n        // Set font\n        button.setFont(new Font(\"Arial\", Font.BOLD, 14));\n\n        // Set border using LineBorder\n        button.setBorderPainted(true);\n\n        // Add action listener (optional)\n        button.addActionListener(new ActionListener() {\n            @Override\n            public void actionPerformed(ActionEvent e) {\n                System.out.println(\"Button clicked: \" + label);\n            }\n        });\n\n        return button;\n    }\n}        ",
        "output": "<img src='./java_images/dele10.jpeg'>"
    },
    {
        "type": "delegationEventModel",
        "index": "deleEventM11",
        "pnumber": "11",
        "programName": "Java Program to Create a List Box to Select Multiple Items and Display it in the Frame",
        "code": "<span class='colorGreen'>// Java Program to Create a List Box to Select Multiple Items and Display it in the Frame</span>\nimport java.awt.Button;\nimport java.awt.Frame;\nimport java.awt.List;\nimport java.awt.event.ActionEvent;\nimport java.awt.event.ActionListener;\nimport java.awt.event.ItemEvent;\nimport java.awt.event.ItemListener;\n\npublic class program11 {\n    public static void main(String[] args) {\n        // Create a frame\n        Frame frame = new Frame(\"Multi-Select List Box Example\");\n\n        // Create a list box\n        List listBox = new List(4, true);\n\n        // Add items to the list box\n        listBox.add(\"Item 1\");\n        listBox.add(\"Item 2\");\n        listBox.add(\"Item 3\");\n        listBox.add(\"Item 4\");\n\n        // Create a button to display selected items\n        Button displayButton = new Button(\"Display Selected Items\");\n\n        // Add components to the frame\n        frame.add(listBox);\n        frame.add(displayButton);\n\n        // Set the layout manager (FlowLayout by default for Frame)\n        frame.setLayout(null);\n\n        // Set the positions of components within the frame\n        listBox.setBounds(20, 20, 150, 100);\n        displayButton.setBounds(20, 130, 200, 30);\n\n        // Add item listener to the list box to handle selection changes\n        listBox.addItemListener(new ItemListener() {\n            @Override\n            public void itemStateChanged(ItemEvent e) {\n                // Handle selection changes if needed\n            }\n        });\n\n        // Add action listener to the button to display selected items\n        displayButton.addActionListener(new ActionListener() {\n            @Override\n            public void actionPerformed(ActionEvent e) {\n                // Get the selected items from the list box\n                String[] selectedItems = listBox.getSelectedItems();\n\n                // Display selected items\n                System.out.print(\"Selected Items: \");\n                for (String selectedItem : selectedItems) {\n                    System.out.print(selectedItem + \", \");\n                }\n                System.out.println();\n            }\n        });\n\n        // Set frame properties\n        frame.setSize(250, 200);\n        frame.setVisible(true);\n\n        // Add a window listener to handle the close event\n        frame.addWindowListener(new java.awt.event.WindowAdapter() {\n            public void windowClosing(java.awt.event.WindowEvent windowEvent) {\n                System.exit(0); // Terminate the program when the frame is closed\n            }\n        });\n    }\n}\n",
        "output": "<img src='delegationEventModelims/program11.png'>"
    },
    {
        "type": "delegationEventModel",
        "index": "deleEventM12",
        "pnumber": "12",
        "programName": "Java Program to Display a Message in a New Frame",
        "code": "<span class='colorGreen'>// Java Program to Display a Message in a New Frame</span>\n\nimport java.awt.Button;\nimport java.awt.Frame;\nimport java.awt.Label;\nimport java.awt.event.ActionEvent;\nimport java.awt.event.ActionListener;\n\npublic class program12 {\n    public static void main(String[] args) {\n        // Create the main frame\n        Frame mainFrame = new Frame(\"Main Frame\");\n\n        // Create a button to open the new frame\n        Button openButton = new Button(\"Open New Frame\");\n\n        // Add the button to the main frame\n        mainFrame.add(openButton);\n\n        // Set layout manager to null for absolute positioning\n        mainFrame.setLayout(null);\n\n        // Set the position of the button\n        openButton.setBounds(20, 40, 150, 30);\n\n        // Add action listener to the button to open the new frame\n        openButton.addActionListener(new ActionListener() {\n            @Override\n            public void actionPerformed(ActionEvent e) {\n                // Create and display the new frame\n                displayMessageFrame(\"Hello, This is a New Frame!\");\n            }\n        });\n\n        // Set main frame properties\n        mainFrame.setSize(200, 150);\n        mainFrame.setVisible(true);\n\n        // Add a window listener to handle the close event\n        mainFrame.addWindowListener(new java.awt.event.WindowAdapter() {\n            public void windowClosing(java.awt.event.WindowEvent windowEvent) {\n                System.exit(0); // Terminate the program when the main frame is closed\n            }\n        });\n    }\n\n    // Function to create and display a new frame with a message\n    private static void displayMessageFrame(String message) {\n        // Create a new frame\n        Frame messageFrame = new Frame(\"Message Frame\");\n\n        // Create a label to display the message\n        Label messageLabel = new Label(message);\n\n        // Add the label to the new frame\n        messageFrame.add(messageLabel);\n\n        // Set layout manager to null for absolute positioning\n        messageFrame.setLayout(null);\n\n        // Set the position of the label\n        messageLabel.setBounds(20, 40, 200, 30);\n\n        // Set new frame properties\n        messageFrame.setSize(250, 150);\n        messageFrame.setVisible(true);\n\n        // Add a window listener to handle the close event\n        messageFrame.addWindowListener(new java.awt.event.WindowAdapter() {\n            public void windowClosing(java.awt.event.WindowEvent windowEvent) {\n                messageFrame.dispose(); // Close the message frame\n            }\n        });\n    }\n}\n",
        "output": "<img src='./java_images/dele12.jpeg'>"
    },
    {
        "type": "delegationEventModel",
        "index": "deleEventM13",
        "pnumber": "13",
        "programName": "Java Program to Close the Frame using WindowAdapter Class",
        "code": "<span class='colorGreen'>// Java Program to Close the Frame using WindowAdapter Class</span>\nimport java.awt.Frame;\nimport java.awt.Label;\nimport java.awt.event.WindowAdapter;\nimport java.awt.event.WindowEvent;\n\npublic class program13 {\n    public static void main(String[] args) {\n        // Create a frame\n        Frame myFrame = new Frame(\"Close Frame Example\");\n\n        // Create a label\n        Label label = new Label(\"This is a frame. Close me!\");\n\n        // Add the label to the frame\n        myFrame.add(label);\n\n        // Set layout manager to null for absolute positioning\n        myFrame.setLayout(null);\n\n        // Set the position of the label\n        label.setBounds(20, 40, 200, 30);\n\n        // Set frame properties\n        myFrame.setSize(250, 150);\n        myFrame.setVisible(true);\n\n        // Add a window listener with WindowAdapter to handle the close event\n        myFrame.addWindowListener(new WindowAdapter() {\n            @Override\n            public void windowClosing(WindowEvent e) {\n                // Close the frame when the close button is clicked\n                myFrame.dispose();\n            }\n        });\n    }\n}\n",
        "output": "<img src='./java_images/dele13.jpeg'>"
    },
    {
        "type": "delegationEventModel",
        "index": "deleEventM14",
        "pnumber": "14",
        "programName": "Java Program to Check Which Fonts are Available in a Local System",
        "code": "<span class='colorGreen'>// Java Program to Check Which Fonts are Available in a Local System</span>\nimport java.awt.Font;\nimport java.awt.GraphicsEnvironment;\n\npublic class program14 {\n    public static void main(String[] args) {\n        // Get the local graphics environment\n        GraphicsEnvironment ge = GraphicsEnvironment.getLocalGraphicsEnvironment();\n\n        // Get an array of all available font family names\n        String[] fontNames = ge.getAvailableFontFamilyNames();\n\n        // Display the available fonts\n        System.out.println(\"Available Fonts:\");\n        for (String fontName : fontNames) {\n            System.out.println(fontName);\n        }\n    }\n}\n",
        "output": "Available Fonts:\nAgency FB\nAlgerian\nArial\nArial Black\nArial Narrow\nArial Rounded MT Bold\nArial Unicode MS\nBahnschrift\nBaskerville Old Face\n"
    },
    {
        "type": "delegationEventModel",
        "index": "deleEventM15",
        "pnumber": "15",

        "programName": "Java Program to Display Text in Different Fonts",
        "code": "<span class='colorGreen'>// Java Program to Display Text in Different Fonts</span>\nimport java.awt.Font;\nimport java.awt.Graphics;\nimport javax.swing.JFrame;\nimport javax.swing.JPanel;\n\npublic class program15 extends JFrame {\n    public program15() {\n        setTitle(\"Text in Different Fonts Example\");\n        setSize(600, 200);\n        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n\n        // Create a custom JPanel for drawing\n        JPanel panel = new JPanel() {\n            @Override\n            protected void paintComponent(Graphics g) {\n                super.paintComponent(g);\n\n                // Draw text in different fonts\n                drawText(g, \"Default Font\", 20, 30, new Font(\"Dialog\", Font.PLAIN, 16));\n                drawText(g, \"Serif Font\", 20, 60, new Font(\"Serif\", Font.BOLD, 18));\n                drawText(g, \"Sans-serif Font\", 20, 90, new Font(\"SansSerif\", Font.ITALIC, 20));\n                drawText(g, \"Monospaced Font\", 20, 120, new Font(\"Monospaced\", Font.PLAIN, 22));\n            }\n        };\n\n        add(panel);\n    }\n\n    private void drawText(Graphics g, String text, int x, int y, Font font) {\n        g.setFont(font);\n        g.drawString(text, x, y);\n    }\n\n    public static void main(String[] args) {\n        program15 example = new program15();\n        example.setVisible(true);\n    }\n}",
        "output": "<img src='delegationEventModelims/program15.png'>"
    },
    {
        "type": "delegationEventModel",
        "index": "deleEventM16",
        "pnumber": "16",
        "programName": "Java Program to Change Frame Background Color as Cyan",
        "code": "<span class='colorGreen'>// Java Program to Change Frame Background Color as Cyan</span>\nimport java.awt.Color;\nimport java.awt.Frame;\nimport java.awt.event.WindowAdapter;\nimport java.awt.event.WindowEvent;\n\npublic class program16 {\n    public static void main(String[] args) {\n        // Create a frame\n        Frame myFrame = new Frame(\"Frame Background Color Example\");\n\n        // Set the background color to cyan\n        myFrame.setBackground(Color.CYAN);\n\n        // Set frame properties\n        myFrame.setSize(300, 200);\n        myFrame.setVisible(true);\n\n        // Add a window listener to handle the close event\n        myFrame.addWindowListener(new WindowAdapter() {\n            @Override\n            public void windowClosing(WindowEvent e) {\n                System.exit(0); // Terminate the program when the frame is closed\n            }\n        });\n    }\n}        ",
        "output": "<img src='./java_images/dele16.jpeg'>"
    },
    // {
    //     "type": "delegationEventModel",
    //     "index": "deleEventM17",
    //     "pnumber": "17",
    //     "programName": " Java Program to Change the Applet Background Colour when Button Clicked",
    //     "code": "<span class='colorGreen'>//  Java Program to Change the Applet Background Colour when Button Clicked</span>\njava.applet has been deprecated and marked for removal",
    //     "output": ""
    // },
    // {
    //     "type": "delegationEventModel",
    //     "index": "deleEventM18",
    //     "pnumber": "18",
    //     "programName": "Java Program to Display Several Dots on the Screen Continuously",
    //     "code": "<span class='colorGreen'>// Java Program to Display Several Dots on the Screen Continuously</span>\n",
    //     "output": "<img src='delegationEventModelims/program18.png'>"
    // },
    // {
    //     "type": "delegationEventModel",
    //     "index": "deleEventM19",
    //     "pnumber": "19",
    //     "programName": "",
    //     "code": "<span class='colorGreen'>// </span>\n",
    //     "output": "<img src='delegationEventModelims/program19.png'>"
    // },
    // {
    //     "type": "delegationEventModel",
    //     "index": "deleEventM20",
    //     "pnumber": "20",
    //     "programName": "",
    //     "code": "<span class='colorGreen'>// </span>\n",
    //     "output": "<img src='delegationEventModelims/program20.png'>"
    // },



    //-----------------------------------------------------
    //exception handling programs
    //-----------------------------------------------------



    {
        "type": "exception Handling",
        "index": "excepH1",
        "pnumber": "1",
        "programName": "Write a Java program that throws an exception and catch it using a try-catch block.",
        "code": "<span class='colorGreen'>// Write a Java program that throws an exception and catch it using a try-catch block.</span>\n// Custom exception class\nclass MyCustomException extends Exception {\n    public MyCustomException(String message) {\n        super(message);\n    }\n}\n\npublic class program1 {\n    public static void main(String[] args) {\n        try {\n            // Attempt to perform an operation that may throw a custom exception\n            performCustomOperation();\n        } catch (MyCustomException ex) {\n            // Catch the specific custom exception and handle it\n            System.out.println(\"Custom Exception caught: \" + ex.getMessage());\n        } finally {\n            // Code inside the finally block will be executed regardless of whether an exception occurs or not\n            System.out.println(\"Finally block executed\");\n        }\n\n        System.out.println(\"Program continues after exception handling\");\n    }\n\n    // A method that throws a custom exception (MyCustomException)\n    private static void performCustomOperation() throws MyCustomException {\n        // Simulating a situation where a custom exception is thrown\n        throw new MyCustomException(\"This is a custom exception\");\n    }\n}\n",
        "output": "Custom Exception caught: This is a custom exception\n        Finally block executed\n        Program continues after exception handling"
    },
    {
        "type": "exception Handling",
        "index": "excepH2",
        "pnumber": "2",
        "programName": "Write a Java program to create a method that takes an integer as a parameter and throws an exception if the number is odd.",
        "code": "<span class='colorGreen'>// Write a Java program to create a method that takes an integer as a parameter and throws an exception if the number is odd.</span>\nclass OddNumberException extends Exception {\n    public OddNumberException(String message) {\n        super(message);\n    }\n}\n\npublic class program2 {\n    public static void main(String[] args) {\n        try {\n            // Test the method with an even number\n            checkIfOdd(4);\n            System.out.println(\"No exception for even number.\");\n\n            // Test the method with an odd number\n            checkIfOdd(7); // This will throw an exception\n        } catch (OddNumberException ex) {\n            // Catch the specific custom exception (OddNumberException) and handle it\n            System.out.println(\"Exception caught: \" + ex.getMessage());\n        } finally {\n            // Code inside the finally block will be executed regardless of whether an exception occurs or not\n            System.out.println(\"Finally block executed\");\n        }\n\n        System.out.println(\"Program continues after exception handling\");\n    }\n\n    // A method that throws a custom exception (OddNumberException) if the number is odd\n    private static void checkIfOdd(int number) throws OddNumberException {\n        if (number % 2 != 0) {\n            // Throw the custom exception if the number is odd\n            throw new OddNumberException(\"The number is odd: \" + number);\n        }\n    }\n}\n",
        "output": "No exception for even number.\n        Exception caught: The number is odd: 7\n        Finally block executed\n        Program continues after exception handling"
    },
    {
        "type": "exception Handling",
        "index": "excepH3",
        "pnumber": "3",
        "programName": "Write a Java program to create a method that reads a file and throws an exception if the file is not found",
        "code": "<span class='colorGreen'>// Write a Java program to create a method that reads a file and throws an exception if the file is not found</span>\nimport java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\n// Custom exception class for file not found\nclass FileNotFoundException extends Exception {\n    public FileNotFoundException(String message) {\n        super(message);\n    }\n}\n\npublic class program3 {\n    public static void main(String[] args) {\n        try {\n            // Test the method with an existing file\n            readFile(\"existingFile.txt\");\n\n            // Test the method with a non-existing file\n            readFile(\"nonExistingFile.txt\"); // This will throw an exception\n        } catch (FileNotFoundException ex) {\n            // Catch the specific custom exception (FileNotFoundException) and handle it\n            System.out.println(\"Exception caught: \" + ex.getMessage());\n        } finally {\n            // Code inside the finally block will be executed regardless of whether an exception occurs or not\n            System.out.println(\"Finally block executed\");\n        }\n\n        System.out.println(\"Program continues after exception handling\");\n    }\n\n    // A method that throws a custom exception (FileNotFoundException) if the file is not found\n    private static void readFile(String fileName) throws FileNotFoundException {\n        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {\n            // Read from the file (dummy operation for demonstration)\n            String line;\n            while ((line = reader.readLine()) != null) {\n                System.out.println(line);\n            }\n        } catch (IOException e) {\n            // If an IOException occurs, wrap it in a custom exception (FileNotFoundException)\n            throw new FileNotFoundException(\"File not found: \" + fileName);\n        }\n    }\n}\n",
        "output": "Exception caught: File not found: existingFile.txt\n        Finally block executed\n        Program continues after exception handling"
    },
    {
        "type": "exception Handling",
        "index": "excepH4",
        "pnumber": "4",
        "programName": "Write a Java program that reads a list of numbers from a file and throws an exception if any of the numbers are positive",
        "code": "<span class='colorGreen'>// Write a Java program that reads a list of numbers from a file and throws an exception if any of the numbers are positive</span>\nimport java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\n// Custom exception class for positive numbers\nclass PositiveNumberException extends Exception {\n    public PositiveNumberException(String message) {\n        super(message);\n    }\n}\n\npublic class program4 {\n    public static void main(String[] args) {\n        try {\n            // Test the method with a file containing only non-positive numbers\n            readNumbersFromFile(\"nonPositiveNumbers.txt\");\n\n            // Test the method with a file containing positive numbers\n            readNumbersFromFile(\"positiveNumbers.txt\"); // This will throw an exception\n        } catch (PositiveNumberException ex) {\n            // Catch the specific custom exception (PositiveNumberException) and handle it\n            System.out.println(\"Exception caught: \" + ex.getMessage());\n        } catch (IOException e) {\n            // Handle general IOException\n            System.out.println(\"IOException caught: \" + e.getMessage());\n        } finally {\n            // Code inside the finally block will be executed regardless of whether an exception occurs or not\n            System.out.println(\"Finally block executed\");\n        }\n\n        System.out.println(\"Program continues after exception handling\");\n    }\n\n    // A method that throws a custom exception (PositiveNumberException) if any number in the file is positive\n    private static void readNumbersFromFile(String fileName) throws PositiveNumberException, IOException {\n        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {\n            String line;\n            while ((line = reader.readLine()) != null) {\n                int number = Integer.parseInt(line);\n                if (number > 0) {\n                    // If a positive number is found, throw the custom exception\n                    throw new PositiveNumberException(\"Positive number found: \" + number);\n                }\n                // Process non-positive numbers (dummy operation for demonstration)\n                System.out.println(\"Processed non-positive number: \" + number);\n            }\n        }\n    }\n}\n",
        "output": "Processed non-positive number: -4\n        Processed non-positive number: -2\n        Exception caught: Positive number found: 1\n        Finally block executed\n        Program continues after exception handling"
    },
    {
        "type": "exception Handling",
        "index": "excepH5",
        "pnumber": "5",
        "programName": "Write a Java program that reads a file and throws an exception if the file is empty.",
        "code": "<span class='colorGreen'>// Write a Java program that reads a file and throws an exception if the file is empty.</span>\nimport java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\n// Custom exception class for empty files\nclass EmptyFileException extends Exception {\n    public EmptyFileException(String message) {\n        super(message);\n    }\n}\n\npublic class ReadFileAndCheckEmpty {\n    public static void main(String[] args) {\n        try {\n            // Test the method with a non-empty file\n            readFileAndCheckEmpty(\"nonEmptyFile.txt\");\n\n            // Test the method with an empty file\n            readFileAndCheckEmpty(\"emptyFile.txt\"); // This will throw an exception\n        } catch (EmptyFileException ex) {\n            // Catch the specific custom exception (EmptyFileException) and handle it\n            System.out.println(\"Exception caught: \" + ex.getMessage());\n        } catch (IOException e) {\n            // Handle general IOException\n            System.out.println(\"IOException caught: \" + e.getMessage());\n        } finally {\n            // Code inside the finally block will be executed regardless of whether an exception occurs or not\n            System.out.println(\"Finally block executed\");\n        }\n\n        System.out.println(\"Program continues after exception handling\");\n    }\n\n    // A method that throws a custom exception (EmptyFileException) if the file is empty\n    private static void readFileAndCheckEmpty(String fileName) throws EmptyFileException, IOException {\n        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {\n            // Read the first line to check if the file is empty\n            String line = reader.readLine();\n            if (line == null) {\n                // If the first line is null, the file is empty, throw the custom exception\n                throw new EmptyFileException(\"File is empty: \" + fileName);\n            }\n\n            // Process the content of the file (dummy operation for demonstration)\n            System.out.println(\"File content: \" + line);\n        }\n    }\n}\n",
        "output": "IOException caught: nonEmptyFile.txt (The system cannot find the file specified)         Finally block executed      \n        Program continues after exception handling"
    },
    {
        "type": "exception Handling",
        "index": "excepH6",
        "pnumber": "6",
        "programName": "Write a Java program that reads a list of integers from the user and throws an exception if any numbers are duplicates",
        "code": "<span class='colorGreen'>// Write a Java program that reads a list of integers from the user and throws an exception if any numbers are duplicates</span>\nimport java.util.HashSet;\nimport java.util.Scanner;\nimport java.util.Set;\n\n// Custom exception class for duplicate numbers\nclass DuplicateNumberException extends Exception {\n    public DuplicateNumberException(String message) {\n        super(message);\n    }\n}\n\npublic class program6 {\n    public static void main(String[] args) {\n        try {\n            // Test the method with user input\n            checkForDuplicates(getUserInput());\n        } catch (DuplicateNumberException ex) {\n            // Catch the specific custom exception (DuplicateNumberException) and handle it\n            System.out.println(\"Exception caught: \" + ex.getMessage());\n        } finally {\n            // Code inside the finally block will be executed regardless of whether an exception occurs or not\n            System.out.println(\"Finally block executed\");\n        }\n\n        System.out.println(\"Program continues after exception handling\");\n    }\n\n    // A method that throws a custom exception (DuplicateNumberException) if any numbers are duplicates\n    private static void checkForDuplicates(int[] numbers) throws DuplicateNumberException {\n        Set<Integer> uniqueNumbers = new HashSet<>();\n\n        for (int number : numbers) {\n            if (!uniqueNumbers.add(number)) {\n                // If add returns false, it means the number is already in the set, throw the custom exception\n                throw new DuplicateNumberException(\"Duplicate number found: \" + number);\n            }\n        }\n    }\n\n    // A method to get a list of integers from the user\n    private static int[] getUserInput() {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter the number of integers: \");\n        int count = scanner.nextInt();\n\n        int[] numbers = new int[count];\n        System.out.println(\"Enter the integers, one by one:\");\n\n        for (int i = 0; i < count; i++) {\n            System.out.print(\"Integer \" + (i + 1) + \": \");\n            numbers[i] = scanner.nextInt();\n        }\n\n        return numbers;\n    }\n}",
        "output": "Enter the number of integers: 3\nEnter the integers, one by one:\nInteger 1: 2\nInteger 2: 4\nInteger 3: -5\nFinally block executed\nProgram continues after exception handling"
    },
    {
        "type": "exception Handling",
        "index": "excepH7",
        "pnumber": "7",
        "programName": "Write a Java program to create a method that takes a string as input and throws an exception if the string does not contain vowels.",
        "code": "<span class='colorGreen'>// Write a Java program to create a method that takes a string as input and throws an exception if the string does not contain vowels.</span>\nclass NoVowelsException extends Exception {\n    public NoVowelsException(String message) {\n        super(message);\n    }\n}\n\npublic class program7 {\n    public static void main(String[] args) {\n        try {\n            // Test the method with strings\n            checkForVowels(\"Hello\"); // This contains vowels, so no exception will be thrown\n            checkForVowels(\"Gym\");   // This does not contain vowels, so an exception will be thrown\n        } catch (NoVowelsException ex) {\n            // Catch the specific custom exception (NoVowelsException) and handle it\n            System.out.println(\"Exception caught: \" + ex.getMessage());\n        } finally {\n            // Code inside the finally block will be executed regardless of whether an exception occurs or not\n            System.out.println(\"Finally block executed\");\n        }\n\n        System.out.println(\"Program continues after exception handling\");\n    }\n\n    // A method that throws a custom exception (NoVowelsException) if the string does not contain vowels\n    private static void checkForVowels(String input) throws NoVowelsException {\n        if (!containsVowels(input)) {\n            // If the string does not contain vowels, throw the custom exception\n            throw new NoVowelsException(\"No vowels found in the string: \" + input);\n        }\n    }\n\n    // A helper method to check if a string contains vowels\n    private static boolean containsVowels(String input) {\n        return input.toLowerCase().matches(\".*[aeiou].*\");\n    }\n}\n",
        "output": "Exception caught: No vowels found in the string: Gym\n        Finally block executed\n        Program continues after exception handling"
    },
    {
        "type": "exception Handling",
        "index": "excepH8",
        "pnumber": "8",
        "programName": "Write a Java program to connect the Java API to Database, if connection not successful then throw an exception",
        "code": "<span class='colorGreen'>// Write a Java program to connect the Java API to Database, if connection not successful then throw an exception</span>\nimport java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.SQLException;\n\n// Custom exception class for database connection failure\nclass DatabaseConnectionException extends Exception {\n    public DatabaseConnectionException(String message) {\n        super(message);\n    }\n}\n\npublic class program8 {\n    // JDBC URL, username, and password of MySQL server\n    private static final String JDBC_URL = \"jdbc:mysql://localhost:3306/your_database\";\n    private static final String USERNAME = \"your_username\";\n    private static final String PASSWORD = \"your_password\";\n\n    public static void main(String[] args) {\n        try {\n            // Test the method to connect to the database\n            connectToDatabase();\n        } catch (DatabaseConnectionException ex) {\n            // Catch the specific custom exception (DatabaseConnectionException) and handle it\n            System.out.println(\"Exception caught: \" + ex.getMessage());\n        } finally {\n            // Code inside the finally block will be executed regardless of whether an exception occurs or not\n            System.out.println(\"Finally block executed\");\n        }\n\n        System.out.println(\"Program continues after exception handling\");\n    }\n\n    // A method that throws a custom exception (DatabaseConnectionException) if the database connection is not successful\n    private static void connectToDatabase() throws DatabaseConnectionException {\n        try (Connection connection = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD)) {\n            // If the connection is successful, perform database operations here\n            System.out.println(\"Connected to the database!\");\n        } catch (SQLException e) {\n            // If an SQLException occurs, wrap it in a custom exception (DatabaseConnectionException)\n            throw new DatabaseConnectionException(\"Failed to connect to the database. Error: \" + e.getMessage());\n        }\n    }\n}",
        "output": "Exception caught: Failed to connect to the database. Error: No suitable driver found for jdbc:mysql://localhost:3306/your_database\n        Finally block executed\n        Program continues after exception handling"
    },
    {
        "type": "exception Handling",
        "index": "excepH9",
        "pnumber": "9",
        "programName": "Write a Java program to manage the driver with path, username and password, if not successful then throw an exception",
        "code": "<span class='colorGreen'>// Write a Java program to manage the driver with path, username and password, if not successful then throw an exception</span>\nimport java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.SQLException;\n\n// Custom exception class for database connection failure\nclass DatabaseConnectionException extends Exception {\n    public DatabaseConnectionException(String message) {\n        super(message);\n    }\n}\n\npublic class DatabaseConnectionManager {\n    // JDBC URL, driver path, username, and password of MySQL server\n    private static final String JDBC_URL = \"jdbc:mysql://localhost:3306/your_database\";\n    private static final String DRIVER_PATH = \"com.mysql.cj.jdbc.Driver\";\n    private static final String USERNAME = \"your_username\";\n    private static final String PASSWORD = \"your_password\";\n\n    public static void main(String[] args) {\n        try {\n            // Load the JDBC driver\n            Class.forName(DRIVER_PATH);\n            \n            // Test the method to connect to the database\n            connectToDatabase();\n        } catch (ClassNotFoundException e) {\n            System.out.println(\"Driver not found: \" + e.getMessage());\n        } catch (DatabaseConnectionException ex) {\n            // Catch the specific custom exception (DatabaseConnectionException) and handle it\n            System.out.println(\"Exception caught: \" + ex.getMessage());\n        } finally {\n            // Code inside the finally block will be executed regardless of whether an exception occurs or not\n            System.out.println(\"Finally block executed\");\n        }\n\n        System.out.println(\"Program continues after exception handling\");\n    }\n\n    // A method that throws a custom exception (DatabaseConnectionException) if the database connection is not successful\n    private static void connectToDatabase() throws DatabaseConnectionException {\n        try (Connection connection = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD)) {\n            // If the connection is successful, perform database operations here\n            System.out.println(\"Connected to the database!\");\n        } catch (SQLException e) {\n            // If an SQLException occurs, wrap it in a custom exception (DatabaseConnectionException)\n            throw new DatabaseConnectionException(\"Failed to connect to the database. Error: \" + e.getMessage());\n        }\n    }\n}",
        "output": "Driver not found: com.mysql.cj.jdbc.Driver\n        Finally block executed\n        Program continues after exception handling"
    },
    {
        "type": "exception Handling",
        "index": "excepH10",
        "pnumber": "10",
        "programName": "Write a Java program to throw the SQL Query, insert, delete, update, if not successful then throw an exception",
        "code": "\nimport java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.SQLException;\nimport java.sql.Statement;\n\n// Custom exception class for SQL query failure\nclass SqlQueryException extends Exception {\n    public SqlQueryException(String message) {\n        super(message);\n    }\n}\n\npublic class program10 {\n    // JDBC URL, driver path, username, and password of MySQL server\n    private static final String JDBC_URL = \"jdbc:mysql://localhost:3306/your_database\";\n    private static final String DRIVER_PATH = \"com.mysql.cj.jdbc.Driver\";\n    private static final String USERNAME = \"your_username\";\n    private static final String PASSWORD = \"your_password\";\n\n    public static void main(String[] args) {\n        try {\n            // Load the JDBC driver\n            Class.forName(DRIVER_PATH);\n\n            // Test SQL queries\n            executeInsertQuery(\"INSERT INTO your_table(column1, column2) VALUES ('value1', 'value2')\");\n            executeUpdateQuery(\"UPDATE your_table SET column1 = 'new_value' WHERE column2 = 'value2'\");\n            executeDeleteQuery(\"DELETE FROM your_table WHERE column1 = 'new_value'\");\n        } catch (ClassNotFoundException e) {\n            System.out.println(\"Driver not found: \" + e.getMessage());\n        } catch (SqlQueryException ex) {\n            // Catch the specific custom exception (SqlQueryException) and handle it\n            System.out.println(\"Exception caught: \" + ex.getMessage());\n        } finally {\n            // Code inside the finally block will be executed regardless of whether an exception occurs or not\n            System.out.println(\"Finally block executed\");\n        }\n\n        System.out.println(\"Program continues after exception handling\");\n    }\n\n    // A method to execute an SQL insert query\n    private static void executeInsertQuery(String sqlQuery) throws SqlQueryException {\n        executeSqlQuery(sqlQuery, \"Insert operation\");\n    }\n\n    // A method to execute an SQL update query\n    private static void executeUpdateQuery(String sqlQuery) throws SqlQueryException {\n        executeSqlQuery(sqlQuery, \"Update operation\");\n    }\n\n    // A method to execute an SQL delete query\n    private static void executeDeleteQuery(String sqlQuery) throws SqlQueryException {\n        executeSqlQuery(sqlQuery, \"Delete operation\");\n    }\n\n    // A generic method to execute an SQL query\n    private static void executeSqlQuery(String sqlQuery, String operationType) throws SqlQueryException {\n        try (Connection connection = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);\n             Statement statement = connection.createStatement()) {\n            // Execute the SQL query\n            int result = statement.executeUpdate(sqlQuery);\n\n            // Check the result of the query\n            if (result > 0) {\n                System.out.println(operationType + \" successful\");\n            } else {\n                // If the result is not as expected, throw the custom exception\n                throw new SqlQueryException(operationType + \" failed. No rows affected.\");\n            }\n        } catch (SQLException e) {\n            // If an SQLException occurs, wrap it in a custom exception (SqlQueryException)\n            throw new SqlQueryException(operationType + \" failed. Error: \" + e.getMessage());\n        }\n    }\n}\n",
        "output": "Driver not found: com.mysql.cj.jdbc.Driver\n        Finally block executed\n        Program continues after exception handling"
    },
    {
        "type": "exception Handling",
        "index": "excepH11",
        "pnumber": "11",
        "programName": "Write a Java program to show an example of throws Keyword.",
        "code": "<span class='colorGreen'>// Write a Java program to show an example of throws Keyword.</span>\nimport java.io.IOException;\n\npublic class program11 {\n\n    public static void main(String[] args) {\n        try {\n            // Call a method that declares it may throw an IOException\n            performFileOperation();\n        } catch (IOException e) {\n            // Handle the IOException if it occurs\n            System.out.println(\"IOException caught: \" + e.getMessage());\n        }\n    }\n\n    // A method that declares it may throw an IOException using the throws keyword\n    private static void performFileOperation() throws IOException {\n        // Simulate a file operation that may throw an IOException\n        // For example, opening a file that doesn't exist\n        throw new IOException(\"File not found\");\n    }\n}",
        "output": "IOException caught: File not found"
    },
    {
        "type": "exception Handling",
        "index": "excepH12",
        "pnumber": "12",
        "programName": "Write a Java program to show an example of multiple catch",
        "code": "<span class='colorGreen'>// Write a Java program to show an example of multiple catch</span>\nimport java.io.IOException;\n\npublic class program12 {\n\n    public static void main(String[] args) {\n        try {\n            // Call a method that may throw either IOException or NullPointerException\n            performFileOperation();\n        } catch (IOException e) {\n            // Handle IOException\n            System.out.println(\"IOException caught: \" + e.getMessage());\n        } catch (NullPointerException e) {\n            // Handle NullPointerException\n            System.out.println(\"NullPointerException caught: \" + e.getMessage());\n        } catch (Exception e) {\n            // Handle any other exceptions (this catch block should come after specific catch blocks)\n            System.out.println(\"General Exception caught: \" + e.getMessage());\n        } finally {\n            // Code inside the finally block will be executed regardless of whether an exception occurs or not\n            System.out.println(\"Finally block executed\");\n        }\n    }\n\n    // A method that may throw either IOException or NullPointerException\n    private static void performFileOperation() throws IOException {\n        // Simulate a file operation that may throw an IOException or a NullPointerException\n        // For example, opening a file that doesn't exist or accessing a null reference\n        boolean simulateIOException = true;\n\n        if (simulateIOException) {\n            throw new IOException(\"File not found\");\n        } else {\n            throw new NullPointerException(\"Null reference accessed\");\n        }\n    }\n}",
        "output": "IOException caught: File not found\n        Finally block executed"
    },
    {
        "type": "exception Handling",
        "index": "excepH13",
        "pnumber": "13",
        "programName": "Write a Java program to show an example of nested try block.",
        "code": "<span class='colorGreen'>// Write a Java program to show an example of nested try block.</span>\npublic class program13 {\n\n    public static void main(String[] args) {\n        try {\n            // Outer try block\n            System.out.println(\"Outer try block - Start\");\n\n            try {\n                // Inner try block 1\n                System.out.println(\"Inner try block 1 - Start\");\n                int result = divide(10, 0); // This may throw an ArithmeticException\n                System.out.println(\"Result of division: \" + result);\n                System.out.println(\"Inner try block 1 - End\");\n            } catch (ArithmeticException e) {\n                // Handle ArithmeticException from the inner try block 1\n                System.out.println(\"ArithmeticException caught in Inner try block 1: \" + e.getMessage());\n            }\n\n            try {\n                // Inner try block 2\n                System.out.println(\"Inner try block 2 - Start\");\n                int[] array = new int[5];\n                int value = array[10]; // This may throw an ArrayIndexOutOfBoundsException\n                System.out.println(\"Value at index 10: \" + value);\n                System.out.println(\"Inner try block 2 - End\");\n            } catch (ArrayIndexOutOfBoundsException e) {\n                // Handle ArrayIndexOutOfBoundsException from the inner try block 2\n                System.out.println(\"ArrayIndexOutOfBoundsException caught in Inner try block 2: \" + e.getMessage());\n            }\n\n            System.out.println(\"Outer try block - End\");\n        } catch (Exception e) {\n            // Handle any remaining exceptions in the outer try block\n            System.out.println(\"Exception caught in Outer try block: \" + e.getMessage());\n        } finally {\n            // Code inside the finally block will be executed regardless of whether an exception occurs or not\n            System.out.println(\"Finally block executed\");\n        }\n\n        System.out.println(\"Program continues after exception handling\");\n    }\n\n    // A method that may throw an ArithmeticException\n    private static int divide(int dividend, int divisor) {\n        return dividend / divisor;\n    }\n}",
        "output": "Outer try block - Start\n        Inner try block 1 - Start\n        ArithmeticException caught in Inner try block 1: / by zero\n        Inner try block 2 - Start\n        ArrayIndexOutOfBoundsException caught in Inner try block 2: Index 10 out of bounds for length 5\n        Outer try block - End\n        Finally block executed\n        Program continues after exception handling"
    },


    //exception handling end
    //--------------------------------------------------------------







]

export { arr1 };