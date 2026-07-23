public Integer addEmployee(Employee employee) {

    Session session = factory.openSession();
    Transaction tx = null;

    try {
        tx = session.beginTransaction();

        session.save(employee);

        tx.commit();
    } catch (Exception e) {
        tx.rollback();
    } finally {
        session.close();
    }

    return 1;
}
