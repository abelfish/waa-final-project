package miu.edu.waadecemberfinalproject.dto;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Data
public class UserDto {
    private Integer id;

    private String firstName;
    private String lastName;
    private String email;
    private String password;

    private String username;
    private boolean active;

    private AddressDto address;
}
