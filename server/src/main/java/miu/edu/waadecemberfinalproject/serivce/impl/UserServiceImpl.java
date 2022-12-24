package miu.edu.waadecemberfinalproject.serivce.impl;


import lombok.RequiredArgsConstructor;
import miu.edu.waadecemberfinalproject.dto.UserDto;
import miu.edu.waadecemberfinalproject.entity.Address;
import miu.edu.waadecemberfinalproject.entity.User;
import miu.edu.waadecemberfinalproject.repository.UserRepository;
import miu.edu.waadecemberfinalproject.serivce.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService {

    private final SecurityContext securityContext;

    private final ModelMapper modelMapper;
    private final UserRepository userRepository;

    @Override
    public List<UserDto> findAll() {
        var users = userRepository.findAll();
        var userDtos = new ArrayList<UserDto>();
        for (User user : users) {
            userDtos.add(modelMapper.map(user, UserDto.class));
        }
        return userDtos;
    }

    @Override
    public UserDto save(UserDto user) {
        var newUser = modelMapper.map(user, User.class);
        userRepository.save(newUser);
        return user;
    }


    @Override
    public UserDto findByUsername(String username) {
        var user = userRepository.findByUsername(username);
        return modelMapper.map(user, UserDto.class);
    }

    @Override
    public UserDto findByEmail(String email) {
        var user = userRepository.findByEmail(email);
        return modelMapper.map(user, UserDto.class);
    }

    @Override
    public UserDto findById(Integer id) {
        var user = userRepository.findById(id).get();
        if (user.isActive()) {
            return modelMapper.map(user, UserDto.class);
        } else {
            return null;
        }
    }

    //TODO: implement findByRole, findByActive, findByAddressState
    @Override
    public UserDto findByRole(String role) {
        return null;

    }

    @Override
    public UserDto findByActive(boolean active) {
        return null;
    }

    @Override
    public UserDto findByAddressState(String state) {
        return null;
    }

    @Override
    public UserDto delete(Integer id) {
        var user = userRepository.findById(id).get();
        user.setActive(false);
        userRepository.save(user);
        return modelMapper.map(user, UserDto.class);
    }

    @Override
    public UserDto update(Integer id, UserDto user) {
        var userToUpdate = userRepository.findById(id).get();
        userToUpdate.setFirstName(user.getFirstName());
        userToUpdate.setLastName(user.getLastName());
        userToUpdate.setEmail(user.getEmail());
        userToUpdate.setUsername(user.getUsername());
        userToUpdate.getAddress().setStreet(user.getAddress().getStreet());
        userToUpdate.getAddress().setCity(user.getAddress().getCity());
        userToUpdate.getAddress().setState(user.getAddress().getState());
        userToUpdate.getAddress().setZip(user.getAddress().getZip());
        userToUpdate.setActive(user.isActive());
        userRepository.save(userToUpdate);
        return modelMapper.map(userToUpdate, UserDto.class);
    }

    @Override
    public UserDto getCurrentUser() {
        var user = (User) securityContext.getAuthentication().getPrincipal();
        return modelMapper.map(user, UserDto.class);
    }


}
