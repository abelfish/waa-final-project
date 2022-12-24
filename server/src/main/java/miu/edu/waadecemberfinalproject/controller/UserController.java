package miu.edu.waadecemberfinalproject.controller;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import miu.edu.waadecemberfinalproject.dto.UserDto;
import miu.edu.waadecemberfinalproject.serivce.UserService;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.List;

@RestController
@RequestMapping("users")
@CrossOrigin
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @RolesAllowed({"admin"})
    @GetMapping
    public List<UserDto> findAll() {
        return userService.findAll();
    }

    @GetMapping("{id}")

    public UserDto getUser(@PathVariable Integer id) {
        return userService.findById(id);
    }

    @GetMapping("/username/{name}")
    public UserDto findByUsername(@PathVariable String name) {
        return userService.findByUsername(name);
    }

    @PostMapping("/add")
    public UserDto save(@RequestBody UserDto user) {
        return userService.save(user);
    }

    @PutMapping("/update/{id}")
    public UserDto update(@PathVariable Integer id, @RequestBody UserDto user) {
        return userService.update(id, user);

    }

    @RolesAllowed({"admin"})
    @DeleteMapping("/delete/{id}")
    public UserDto delete(@PathVariable Integer id) {
        return userService.delete(id);
    }


}
