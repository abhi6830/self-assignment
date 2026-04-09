#include <iostream>

// Function Template
template <typename T>
T findMax(T x, T y) {
    return (x > y) ? x : y;
}

int main() {
    std::cout << "Max of 10 and 20: " << findMax<int>(10, 20) << std::endl;
    std::cout << "Max of 5.5 and 2.1: " << findMax<double>(5.5, 2.1) << std::endl;
    std::cout << "Max of 'g' and 'a': " << findMax<char>('g', 'a') << std::endl;

    return 0;
}