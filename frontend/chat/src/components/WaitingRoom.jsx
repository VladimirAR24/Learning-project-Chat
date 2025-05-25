import { Button, Heading, Input, Text } from "@chakra-ui/react"

export const Waitingroom = () => {
    return (
        <form className="max-w-sm w-full bg-white p-8 rounded shadow-lg">
            <Heading>Онлайн чат</Heading>
            <div className="mb-4">
                <Text fontSize={"sm"}>Имя пользователя</Text>
                <Input name="userName" placeholder="Введите ваше имя" />
            </div>
            <div className="mb-4">
                <Text fontSize={"sm"}>Название чата</Text>
                <Input name="chatRoom" placeholder="Введите название чата" />
            </div>
            <Button type="submit" colorScheme="blue">
                Присоединиться
            </Button>
            
        </form>
    )
}