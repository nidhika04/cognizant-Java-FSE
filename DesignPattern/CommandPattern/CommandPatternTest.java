public class CommandPatternTest {

    public static void main(String[] args) {

        // Receiver
        Light light = new Light();

        // Commands
        Command lightOn = new LightOnCommand(light);
        Command lightOff = new LightOffCommand(light);

        // Invoker
        RemoteControl remote = new RemoteControl();

        System.out.println("Pressing ON button:");
        remote.setCommand(lightOn);
        remote.pressButton();

        System.out.println();

        System.out.println("Pressing OFF button:");
        remote.setCommand(lightOff);
        remote.pressButton();
    }
}