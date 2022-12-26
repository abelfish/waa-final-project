package miu.edu.waadecemberfinalproject.service;

import miu.edu.waadecemberfinalproject.dto.UserDto;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public interface UserService {
    public List<UserDto> findAll();

    public UserDto save(UserDto user);

    public UserDto findByUsername(String username);

    public UserDto findByEmail(String email);

    public UserDto findById(Integer id);

    public UserDto findByRole(String role);

    public UserDto findByActive(boolean active);

    public UserDto findByAddressState(String state);

    public UserDto delete(Integer id);

    public UserDto update(Integer id, UserDto user);

    public UserDto getCurrentUser();
}
