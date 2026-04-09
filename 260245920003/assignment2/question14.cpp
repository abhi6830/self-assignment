#include <iostream>
#include <vector>

int main() {
    
    std::vector<int> numbers = {10, 20, 30};
    numbers.push_back(40);
    std::cout << "Vector elements: ";
    for (int i : numbers) {
        std::cout << i << " ";
    }

    return 0;
}