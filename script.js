function shortcut(str1, str2) {
    // Handle edge cases: if either string is empty, return empty string
    if (str1.length === 0 || str2.length === 0) {
        return "";
    }

    // Get the initial letters of each string
    const initial1 = str1.charAt(0);
    const initial2 = str2.charAt(0);

    // Concatenate and return the result
    return initial1 + initial2;
}

