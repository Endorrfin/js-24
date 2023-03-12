/*
* Awaited - дозволяє рекурсивно розгортати проміси.
* Отримувати тип результата виконання промісу.
 * */


// ========= Example 1.1 =========

declare function fetch(): Promise<string>

type FetchResult = Awaited<ReturnType<typeof fetch>>




