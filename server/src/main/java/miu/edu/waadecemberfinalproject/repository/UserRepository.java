package miu.edu.waadecemberfinalproject.repository;

import miu.edu.waadecemberfinalproject.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    public User findByUsername(String username);
    public User findByEmail(String email);


}
