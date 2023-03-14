package com.sapo.mock.techshop.dto.response;

import com.sapo.mock.techshop.entity.Category;
import com.sapo.mock.techshop.entity.Manufacturer;
import com.sapo.mock.techshop.entity.Product;
import lombok.*;

import java.util.Date;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CollectionDashboardResponseDTO {
    private Integer id;
    private Manufacturer manufacturer;
    private Category category;
    private String name;
    private List<Product> products;
    private Integer status;
    private Date created_at;
    private Date updated_at;
}
