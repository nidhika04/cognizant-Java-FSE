public class MVCPatternExample {

    public static void main(String[] args) {

        Student model = new Student("Nidhika", 101, "A");

        StudentView view = new StudentView();

        StudentController controller = new StudentController(model, view);

        System.out.println("Initial Student Details:");
        controller.updateView();

        System.out.println();

        controller.setStudentName("Krishna");
        controller.setStudentId(102);
        controller.setStudentGrade("A+");

        System.out.println("Updated Student Details:");
        controller.updateView();
    }
}