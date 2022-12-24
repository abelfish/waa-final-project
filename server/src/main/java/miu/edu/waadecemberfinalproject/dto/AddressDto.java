package miu.edu.waadecemberfinalproject.dto;


import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class AddressDto {

    private Integer id;
    private String street;
    private String city;
    private String state;
    private String zip;
}
