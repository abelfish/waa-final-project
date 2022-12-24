package miu.edu.waadecemberfinalproject.repository;

import miu.edu.waadecemberfinalproject.entity.Address;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository

public interface AddressRepository extends CrudRepository<Address, Integer> {


}
