package miu.edu.waadecemberfinalproject.dto;


import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;


import java.util.List;


@Component
@Data
@NoArgsConstructor
public class RoleDto {
    private Integer id;
    private String name;

    private List<UserDto> users;
}
